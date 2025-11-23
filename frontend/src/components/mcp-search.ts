import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

interface McpServer {
  id: string;
  name: string;
  description: string;
  command: string;
  args: string[];
  env: Record<string, string> | null;
  logoUrl: string | null;
}

@customElement('mcp-search')
export class McpSearch extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      font-family: var(--sl-font-sans);
    }

    .header {
      text-align: center;
      margin-bottom: 60px;
      position: relative;
    }

    .header::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 2px;
      background: var(--brand-primary);
      box-shadow: 0 0 10px var(--brand-primary);
    }

    h1 {
      font-size: 3.5rem;
      color: var(--sl-color-neutral-950);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
    }
    
    .subtitle {
      color: var(--brand-primary);
      font-size: 1.2rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .search-container {
      margin-bottom: 50px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    sl-input::part(base) {
      background: rgba(0, 0, 0, 0.3);
      border-color: var(--sl-color-primary-800);
      backdrop-filter: blur(5px);
    }

    sl-input::part(base):focus-within {
      border-color: var(--brand-primary);
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
    }

    .results {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    }

    /* Holographic Card Styles */
    sl-card {
      height: 100%;
      --border-radius: 12px;
      border: none;
      background: transparent;
    }

    sl-card::part(base) {
      background: var(--brand-bg-panel);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 243, 255, 0.15);
      box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.3), 
        0 0 15px rgba(0, 243, 255, 0.05);
      transition: all 0.3s ease;
    }

    sl-card:hover::part(base) {
      border-color: rgba(0, 243, 255, 0.5);
      box-shadow: 
        0 10px 20px -3px rgba(0, 0, 0, 0.4),
        0 0 25px rgba(0, 243, 255, 0.2);
      transform: translateY(-5px);
    }

    sl-card [slot='header'] {
      display: flex;
      align-items: center;
      gap: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 15px;
    }

    .logo {
      width: 48px;
      height: 48px;
      object-fit: contain;
      border-radius: 8px;
      background: rgba(255,255,255,0.05);
      padding: 4px;
    }

    .server-name {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--sl-color-neutral-1000);
      letter-spacing: 0.5px;
    }

    .description {
      color: var(--sl-color-neutral-400); /* Will rely on shoelace dark theme neutral-400 equivalent which is light grey */
      margin-bottom: 1.5rem;
      line-height: 1.6;
      font-weight: 300;
      color: var(--sl-color-neutral-300); /* Actually shoelace dark theme inverts this? Let's use specific color */
      color: #b0b0d0;
    }

    .code-block {
      background: rgba(0, 0, 0, 0.4);
      padding: 15px;
      border-radius: 8px;
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 0.85rem;
      margin-top: 1.5rem;
      position: relative;
      overflow-x: auto;
      border: 1px solid rgba(255, 255, 255, 0.05);
      color: #a5f3fc;
    }

    sl-button[variant="primary"]::part(base) {
      background: rgba(0, 243, 255, 0.1);
      border-color: var(--brand-primary);
      color: var(--brand-primary);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    sl-button[variant="primary"]:hover::part(base) {
      background: var(--brand-primary);
      color: #000;
      box-shadow: 0 0 20px var(--brand-primary);
    }
  `;

  @state()
  private searchQuery = '';

  @state()
  private servers: McpServer[] = [];

  @state()
  private loading = false;

  async firstUpdated() {
    await this.fetchServers();
  }

  private async fetchServers() {
    this.loading = true;
    try {
      const url = this.searchQuery 
        ? `http://localhost:3000/api/mcp?q=${encodeURIComponent(this.searchQuery)}`
        : 'http://localhost:3000/api/mcp';
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch servers');
      this.servers = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  private handleSearch(e: CustomEvent) {
    this.searchQuery = (e.target as HTMLInputElement).value;
    this.fetchServers();
  }

  private getMcpConfig(server: McpServer) {
    const config = {
      mcpServers: {
        [server.name]: {
          command: server.command,
          args: server.args,
          env: server.env
        }
      }
    };
    return JSON.stringify(config, null, 2);
  }

  private copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
    alert('Copied to clipboard!');
  }

  render() {
    return html`
      <div class="header">
        <h1>MCP Directory 2100</h1>
        <div class="subtitle">Neural Interface for Model Context Protocol</div>
      </div>

      <div class="search-container">
        <sl-input
          placeholder="Search servers..."
          size="large"
          clearable
          @sl-input=${this.handleSearch}
        >
          <sl-icon name="search" slot="prefix"></sl-icon>
        </sl-input>
      </div>

      <div class="results">
        ${this.loading
          ? html`<p>Loading...</p>`
          : this.servers.map(
              (server) => html`
                <sl-card>
                  <div slot="header">
                    ${server.logoUrl
                      ? html`<img src="${server.logoUrl}" alt="${server.name}" class="logo" />`
                      : html`<sl-icon name="box" style="font-size: 2rem;"></sl-icon>`}
                    <span class="server-name">${server.name}</span>
                  </div>

                  <div class="description">${server.description}</div>

                  <sl-button variant="primary" outline style="width: 100%" @click=${() => this.copyToClipboard(this.getMcpConfig(server))}>
                    <sl-icon name="copy" slot="prefix"></sl-icon>
                    Copy Config
                  </sl-button>
                  
                  <div class="code-block">
                    ${this.getMcpConfig(server)}
                  </div>
                </sl-card>
              `
            )}
      </div>
    `;
  }
}
