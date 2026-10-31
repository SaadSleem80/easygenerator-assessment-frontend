# AI Collaboration & Implementation Log (AI_README.md)

This document outlines how AI assistance was leveraged during the development of the Easygenerator frontend application. It details the areas where AI was used, the prompt strategies that proved most effective, challenges faced, and the manual corrections or reworks required.

---

## 🤖 Areas Where AI Was Leveraged

1. **UI Component Design & Styling**:
   - Designed clean, accessible UI components utilizing Tailwind CSS v4 and Lucide React icons.
   - Built modern, responsive layouts for the authentication forms (`SignInForm`, `SignUpForm`).
   - Crafted user-friendly feedback states and polished pages including the **Home Page** (`/`) and **404 Not Found Page** (`*`) with back-navigation actions.

2. **Custom Hooks & TanStack React Query**:
   - Implemented dedicated mutation and query hooks:
     - `useSignIn` & `useSignUp`: Wrapped around Axios API calls with proper `onError` / `onSuccess` handlers and automatic navigation.
     - `useSignOut`: Cleans up cached query state and user session.
     - `useCurrentUser`: Fetches the authenticated user profile and handles caching / refetching.

3. **API Integration & Error Handling**:
   - Configured the centralized Axios client (`src/lib/axios.ts`) with credentials support for cookie-based authentication.
   - Built standard error-handling utilities (`getApiError`) capable of normalizing multiple backend error shapes (string messages, arrays of validation errors, network fallbacks).
   - Wired toast notifications to display human-readable server responses.

4. **Forms & Client-side Validation**:
   - Setup React Hook Form integrated with Zod schemas via `@hookform/resolvers/zod`.
   - Built real-time field error indicators and password policy requirements.

---

## 🎯 Prompts & Approaches That Were Effective

- **Contract-First API Integration**:
  - *Approach*: Providing the expected request/response shapes and error formats from the backend allowed the AI to implement robust error parsers and strongly-typed endpoints without guesswork.
  - *Example Prompt*: *"Write an Axios error extraction helper that handles both string messages and arrays of error strings returned by the API response."*

- **Separation of Concerns for Routing & Route Guards**:
  - *Approach*: Separating authenticated logic (`ProtectedRoute`) from guest logic (`GuestRoute`) and using React Router's layout outlet pattern kept page components clean and declarative.

---

## ⚠️ Challenges, Corrections & Manual Rework

While AI accelerated scaffolding and boilerplate creation, several areas required manual intervention and debugging:

1. **TypeScript 5.x / 7.x & tsconfig `baseUrl` Deprecation**:
   - *Problem*: The initial TypeScript configuration generated with `"baseUrl": "."` caused modern TypeScript builds to fail with error `TS5102: Option 'baseUrl' has been removed`.
   - *Rework*: Removed `baseUrl` and aligned `tsconfig.app.json` and `tsconfig.json` paths with the bundler resolution specification (`@src/*` and `@/*` mapping directly to `./src/*`).

2. **Path Alias Alignment (`@` vs `@src`)**:
   - *Problem*: Inconsistencies between Vite alias configurations and TypeScript paths caused module resolution errors in CI/build steps.
   - *Rework*: Synchronized aliases across `vite.config.ts`, `tsconfig.json`, and `tsconfig.app.json` so both `@src` and `@` resolve reliably.

3. **Authentication State Race Conditions during Page Refresh**:
   - *Problem*: Naive route guards redirected users to `/sign-in` prematurely on page reload before the initial `getCurrentUser` session query completed.
   - *Rework*: Implemented `AuthInitializer` and handled `isPending` state inside `GuestRoute` and `ProtectedRoute` to prevent flashing or unwanted redirects during initial auth hydration.

4. **Package Version Compatibility**:
   - *Problem*: Some AI-suggested packages (such as legacy UI library helpers or outdated TanStack Query syntax) conflicted with React 19 and Tailwind CSS v4.
   - *Rework*: Manually audited `package.json`, ensured compatibility with React 19, and used Tailwind v4 directives.

---

## 💡 Summary

Using AI as a pair programmer was instrumental for rapid prototyping, drafting consistent Tailwind UI layouts, and generating typed React Query hooks. The critical human contributions remained architectural decisions, build pipeline stabilization, verifying auth flow edge cases, and ensuring strict TypeScript compliance.

