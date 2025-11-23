import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import './styles/global.css';
import './components/mcp-search';

@customElement('app-shell')
export class AppShell extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <mcp-search></mcp-search>
    `;
  }
}
