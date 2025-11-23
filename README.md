# MCP Directory 2100

A futuristic, intelligent search engine and directory for **Model Context Protocol (MCP)** servers. This platform allows users to discover, scrape, and integrate MCP servers into their AI workflows with a cutting-edge "Year 2100" holographic interface.

![MCP Directory UI](https://via.placeholder.com/800x400?text=MCP+Directory+2100+UI)

## 🚀 Key Features

### 🔍 Intelligent Search
*   **PostgreSQL-Powered:** Fast, insensitive search across server names and descriptions.
*   **Semantic Understanding:** (Planned) Future upgrades will include vector-based semantic search.

### 🤖 AI-Powered Web Scraper
*   **Automated Discovery:** A background worker system that scrapes websites for MCP server configurations.
*   **LLM Extraction:** Utilizes **Google Gemini 1.5 Flash** to intelligently parse unstructured HTML into strict JSON data.
*   **Smart Deduplication:** Checks existing database records before processing to prevent duplicates and save tokens.
*   **Queue System:** Built on **BullMQ** and **Redis** for robust, scalable job processing.

### 🎨 "Year 2100" Design System
*   **Holographic UI:** Custom design system built on **Lit** and **Shoelace**.
*   **Visuals:** Deep space backgrounds, neon cyan accents (`#00f3ff`), glassmorphism, and glowing effects.
*   **Responsive:** Fully responsive grid layout for server cards.

### 🔒 Enterprise-Grade Security
*   **Protection:** Implements `helmet` for secure HTTP headers.
*   **Rate Limiting:** `express-rate-limit` protects the API from abuse and DDoS attacks.
*   **CORS:** Configured for secure frontend-backend communication.

## 🛠 Tech Stack

*   **Frontend:** Lit, Vite, TypeScript, Shoelace CSS
*   **Backend:** Node.js, Express, TypeScript
*   **Database:** PostgreSQL, Prisma ORM
*   **Queue/Cache:** Redis, BullMQ
*   **AI:** Google Gemini API
*   **Infrastructure:** Docker, Docker Compose

## 📦 Quick Start

1.  **Clone the repository.**
2.  **Start Docker:** Ensure Docker Desktop is running.
3.  **Run the stack:**
    ```bash
    cd backend
    docker-compose up -d --build
    ```
4.  **Access the App:**
    *   **Frontend:** `http://localhost:5173`
    *   **Backend API:** `http://localhost:3000`

For detailed development and configuration instructions, see [DEVELOPMENT.md](./DEVELOPMENT.md).
