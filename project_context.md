# Project Context

This document provides a summary of the project's structure, workflow, and dependencies.

## Summary of Findings

The investigation was interrupted before all files could be analyzed. However, a significant portion of the project has been mapped out.

The project is a React application built with Vite. It uses React Router for routing, Tailwind CSS for styling, and a custom context and hook for authentication. API interactions are handled by a dedicated service file.

**Project Structure:**
- The `src` directory contains the application's source code, organized into `assets`, `components`, `contexts`, `hooks`, `pages`, and `services`.
- The entry point is `src/main.jsx`, which renders the `App` component.
- `src/App.jsx` sets up the application's routing and authentication.

**Workflow:**
- The application uses a token-based authentication system. The token and user data are stored in `sessionStorage`.
- The `AuthContext` provides authentication state to the application.
- The `api.js` service handles all communication with the backend API. It automatically adds the authentication token to requests.
- Protected routes are implemented using a `ProtectedRoute` component.

**Dependencies:**
- `react`, `react-dom`
- `react-router-dom`
- `tailwindcss`
- `vite`
- `eslint`

**Further Investigation:**
Due to the interruption, the following files were not fully analyzed:
- `src/components/NavBar.jsx`
- `src/components/ProtectedRoute.jsx`
- `vite.config.js`
- `eslint.config.js`
- The `pages` directory.

A full analysis of these files would be necessary to have a complete understanding of the project.

## Exploration Trace

- Analyzed `package.json` to understand dependencies and scripts.
- Listed the contents of the `src` directory to understand the project structure.
- Read `src/main.jsx` to understand the application entry point.
- Read `src/App.jsx` to understand routing.
- Read `src/contexts/AuthContext.jsx` to understand state management.
- Read `src/hooks/useAuth.jsx` to understand how auth context is consumed.
- Read `src/services/api.js` to understand API interactions.
- Listed the contents of the `src/components` directory.
- Read `src/components/ListingCard.jsx` to understand the component.

## Relevant Locations

- **package.json**: Defines the project's dependencies, scripts, and metadata.
  - Key Symbols: `dependencies`, `devDependencies`, `scripts`
- **src/main.jsx**: The entry point of the application, where the App component is rendered.
  - Key Symbols: `createRoot`, `App`
- **src/App.jsx**: Sets up the application's routing and wraps the application in an authentication provider.
  - Key Symbols: `BrowserRouter`, `Routes`, `Route`, `AuthProvider`, `ProtectedRoute`
- **src/contexts/AuthContext.jsx**: Manages the application's authentication state.
  - Key Symbols: `createContext`, `AuthProvider`, `login`, `logout`
- **src/hooks/useAuth.jsx**: A custom hook for accessing the authentication context.
  - Key Symbols: `useContext`, `AuthContext`
- **src/services/api.js**: Handles all communication with the backend API.
  - Key Symbols: `apiFetch`, `listingsAPI`, `authAPI`
- **src/components/ProtectedRoute.jsx**: A component that protects routes from unauthorized access. Its content was not analyzed due to interruption.
- **src/components/NavBar.jsx**: The navigation bar component. Its content was not analyzed due to interruption.
- **vite.config.js**: Vite configuration file. Its content was not analyzed due to interruption.
- **eslint.config.js**: ESLint configuration file. Its content was not analyzed due to interruption.
