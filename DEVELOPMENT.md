# Development Guide

This guide provides comprehensive instructions for setting up, running, and extending the MCP Directory 2100 platform.

## 📋 Prerequisites

*   **Node.js** (v18+)
*   **Docker** & **Docker Desktop** (Required for Database & Redis)
*   **Google Gemini API Key** (Required for the AI Scraper)

## ⚙️ Configuration

### 1. Environment Variables (`backend/.env`)

Create a `.env` file in the `backend` directory with the following keys:

```env
# Database Connection (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Redis Connection (for BullMQ)
REDIS_HOST=localhost
REDIS_PORT=6379

# AI Provider
GEMINI_API_KEY="your_gemini_api_key_here"

# Server Config
PORT=3000
```

## 🚀 Running the Application

### Option A: Docker (Recommended for Production/Full Stack)

This starts the PostgreSQL database, Redis queue, Backend API, and the Scraper Worker in orchestrated containers.

```bash
cd backend
docker-compose up -d --build
```

*   **Frontend:** You still need to run the frontend locally or build it.
    ```bash
    cd frontend
    npm run dev
    ```

### Option B: Local Development (Manual)

1.  **Start Infrastructure:**
    Use Docker to run only the backing services (Postgres & Redis).
    ```bash
    cd backend
    docker-compose up -d postgres redis
    ```

2.  **Run Backend:**
    ```bash
    cd backend
    npm run dev
    ```

3.  **Run Scraper Worker (Separate Terminal):**
    The worker runs as a separate process to process queue jobs.
    ```bash
    cd backend
    npm run worker:dev
    ```

4.  **Run Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```

## 🗄️ Database Management

We use **Prisma ORM** with PostgreSQL.

*   **Migration:** Apply schema changes to the DB.
    ```bash
    npx prisma migrate dev --name your_migration_name
    ```
*   **Seeding:** Populate the DB with initial data.
    ```bash
    npx ts-node prisma/seed.ts
    ```
*   **Studio:** Open a GUI to view/edit data.
    ```bash
    npx prisma studio
    ```

### Schema: `McpServer`

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Unique primary key |
| `name` | String | Unique server name |
| `command` | String | Executable command (e.g. `npx`) |
| `args` | String[] | Arguments list |
| `env` | Json | Environment variables map |
| `rating` | Float | Server rating (0-5) |
| `tags` | String[] | Categorization tags |
| `sourceUrl` | String | Origin URL of the scraped data |

## 🕷️ Using the Scraper

The scraper is an asynchronous worker. You trigger it via the API, and it processes in the background.

**Trigger a Scrape:**

```bash
curl -X POST http://localhost:3000/api/mcp/scrape \
  -H "Content-Type: application/json" \
  -d '{"url": "https://github.com/topics/mcp-server"}'
```

**Workflow:**
1.  **Queue:** The URL is added to `scraper-queue` (Redis).
2.  **Fetch:** The Worker fetches the HTML content using `axios` + `cheerio`.
3.  **AI Parse:** The text content + list of *existing server names* is sent to **Gemini 1.5 Flash**.
4.  **Deduplication:** The LLM filters out servers that already exist in the DB.
5.  **Insert:** New servers are validated and inserted into Postgres.

## 🎨 Frontend Architecture

*   **Framework:** Lit (Web Components)
*   **Build Tool:** Vite
*   **Theme:** Custom "Year 2100" CSS variables located in `frontend/src/styles/global.css`.
*   **Components:**
    *   `mcp-search`: Main container, handles state and API calls.
    *   Uses `sl-card`, `sl-input`, `sl-button` (Shoelace) with heavy CSS overrides for the holographic look.

## 🔐 Security

*   **Helmet:** Automatically sets `Content-Security-Policy`, `X-Frame-Options`, etc.
*   **Rate Limiting:** Configured in `backend/src/server.ts` (default: 100 requests / 15 min).
