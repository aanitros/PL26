# ProLeague

### Build Your Legacy. Rule the League.

This repository contains the full-stack implementation of ProLeague, a Football-Manager-style Online Career game with Singleplayer support.

---

## Tech Stack

-   **Monorepo:** pnpm workspaces
-   **Frontend:** React 18, Vite, TypeScript, Tailwind CSS, Zustand, React Router
-   **Backend:** Node.js, Express, TypeScript, Socket.IO
-   **Database:** PostgreSQL with Prisma ORM
-   **Authentication:** Email/Password with secure session cookies
-   **Testing:** Vitest, React Testing Library, Jest, Supertest
-   **Deployment:** Docker

---

## Color Palette Summary

The UI uses a dark theme inspired by modern sports games, with a vibrant gold/yellow accent for primary actions and highlights.

-   **Background:** Dark Navy/Charcoal (`#111827`)
-   **Foreground:** Light Gray/White (`#F3F4F6`)
-   **Primary Accent:** Gold (`#FBBF24`)
-   **Secondary/Muted:** Dark Slate (`#374151`)

---

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   pnpm (v9+)
-   Docker and Docker Compose

### Installation & Running

1.  **Install dependencies from the root directory:**
    ```bash
    pnpm install
    ```

2.  **Set up the database and run migrations:**
    You will need a running PostgreSQL instance. Create a `.env` file in `apps/api` based on the `.env.example`. Then run:
    ```bash
    pnpm prisma:migrate
    ```

3.  **Seed the database with initial data:**
    ```bash
    pnpm prisma:seed
    ```

4.  **Run the development servers:**
    This command will start both the API and the Web client in parallel.
    ```bash
    pnpm dev
    ```

-   API will be available at `http://localhost:4000`
-   Web client will be available at `http://localhost:3000`

### Running with Docker

To run the entire stack using Docker Compose:

1.  **Build and start the services:**
    ```bash
    docker-compose up --build
    ```

This will start the Postgres database, the API server, and the web server.
