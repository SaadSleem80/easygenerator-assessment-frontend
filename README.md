# Easygenerator Assessment - Frontend

A modern, responsive authentication web application built for the Easygenerator assessment. The project features clean architecture, type safety, seamless routing, client-side validation, server state caching, and cookie-based session management.

---

## 🚀 Tech Stack

- **Framework & Tooling**: [React 19](https://react.dev/), [Vite 8](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v7 / v8](https://reactrouter.com/) (Data routing with `createBrowserRouter`, layout routes, nested routing)
- **Server State & Data Fetching**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **HTTP Client**: [Axios](https://axios-http.com/) (configured with `withCredentials: true` for HTTP-only cookie support)
- **Form Handling & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) with `@hookform/resolvers`
- **Styling & UI**: [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/), and accessible UI components powered by `@base-ui/react` and custom toast alerts
- **Linting & Code Quality**: [Oxlint](https://oxc.rs/)

---

## 🌟 Features

- **Authentication Flow**:
  - **Sign Up**: Real-time form validation adhering to password security constraints (minimum 8 characters, letters, and special characters).
  - **Sign In**: User authentication with credentials and state hydration.
  - **Sign Out**: Clean invalidation of cached queries and session cleanup.
- **Route Guards**:
  - `ProtectedRoute`: Safeguards private routes (e.g., Home page) and redirects unauthenticated users to `/sign-in`.
  - `GuestRoute`: Prevents authenticated users from accessing login/signup forms, redirecting them to `/`.
- **Pages**:
  - `/sign-in`: Clean and accessible login interface.
  - `/sign-up`: Account creation with interactive validation hints.
  - `/`: Protected landing / dashboard page welcoming authenticated users with sign-out capability.
  - `*` (Not Found / 404): Polished error page allowing users to return home or go back in browser history.
- **Error Handling**:
  - Centralized Axios error extractor (`getApiError`) supporting backend array error messages, validation strings, and fallback notifications.
  - User feedback via a priority-based toast system.

---

## 📁 Project Architecture

The codebase follows a modular feature-based structure (`src/features/...`):

```text
src/
├── app/
│   ├── layouts/         # Root layouts & shared wrappers
│   ├── providers/       # AuthInitializer
│   └── router/          # Router config, GuestRoute, ProtectedRoute
├── components/
│   └── ui/              # Reusable UI elements (Button, Card, Input, Toast, etc.)
├── features/
│   ├── auth/            # Auth feature slice
│   │   ├── components/  # SignInForm, SignUpForm
│   │   ├── hooks/       # useSignIn, useSignUp, useSignOut, useCurrentUser
│   │   ├── pages/       # signin, signup page components
│   │   ├── schemas/     # Zod validation schemas
│   │   ├── services/    # Axios auth endpoints
│   │   ├── types/       # Auth TypeScript definitions
│   │   └── utils/       # Storage helpers
│   ├── errors/          # 404 Not Found & general error pages
│   └── home/            # Authenticated Home page
├── lib/
│   ├── axios.ts         # Axios instance & global error normalization
│   └── utils.ts         # Styling class merge utilities (clsx + tailwind-merge)
└── main.tsx             # Application bootstrap & entry point
```

---

## 🛠️ Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- `npm`, `pnpm`, or `yarn`

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
```

*(Adjust the URL to point to your backend server instance)*

### 3. Installation

```bash
npm install
```

### 4. Running the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Build & Linting

```bash
# Type check and build for production
npm run build

# Preview production build locally
npm run preview

# Run Oxlint
npm run lint
```
