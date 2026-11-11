# Typed Data Dashboard

A dynamic and responsive dashboard built with **React, TypeScript, and Vite**. This project demonstrates typed component development, server-state management, global client-state management, advanced React hooks, and component testing.

Developed as part of **Elevvo Pathways Frontend Development Internship**.

## Project Overview

The Typed Data Dashboard retrieves external data from a public API and displays it through reusable React components. It uses TypeScript interfaces to improve code structure and type safety while managing server data and global UI preferences through dedicated state-management libraries.

## Key Features

- **React + TypeScript:** Built using React with TypeScript and `.tsx` component files.
- **TypeScript Interfaces:** Defines interfaces to provide type safety for component props.
- **API Integration:** Fetches external posts or user data using TanStack Query.
- **Loading & Error Handling:** Displays appropriate fallback UI using `isLoading` and `isError` states.
- **Global State Management:** Uses Zustand to manage global dark/light theme preferences.
- **Search Autofocus:** Implements React's `useRef` hook to automatically focus the search input when the page loads.
- **Component Testing:** Includes React Testing Library tests to verify component rendering.
- **Responsive Interface:** Provides a dashboard layout designed for different screen sizes.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | User interface development |
| TypeScript | Static typing and interfaces |
| Vite | Development environment and build tool |
| TanStack Query | Server-state management and API fetching |
| Zustand | Global client-state management |
| React Hooks | Component logic and references |
| React Testing Library | Component testing |
| CSS | Interface styling |

## Project Requirements

This project demonstrates the following concepts:

1. Transitioning React components from `.jsx` to `.tsx`.
2. Defining and using TypeScript interfaces for component props.
3. Fetching external API data with TanStack Query.
4. Handling loading and error states.
5. Managing global UI preferences using Zustand without prop drilling.
6. Using `useRef` to automatically focus the search input.
7. Testing typed components using React Testing Library.

## Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/Adeeba333/Elevvo_Frontend_Development_mod7.git
```

**2. Navigate to the project directory**

```bash
cd Elevvo_Frontend_Development_mod7
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Build the project**

```bash
npm run build
```

Run the test script configured in `package.json` to execute the component tests.

## Learning Outcomes

Through this project, I strengthened my understanding of:

- TypeScript in React applications.
- Component props and interface definitions.
- Server-state and client-state management.
- API integration and asynchronous data handling.
- Advanced React Hooks.
- Component testing and debugging.

## Author

**Mahmuda Adeeba Tul Husna**  
