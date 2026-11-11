Problem Statement
Develop a dynamic data dashboard using Vite, React, and TypeScript. Fetch and display external API data while implementing global theme preferences. Use TypeScript interfaces for component props, TanStack Query for data fetching, Zustand for global state management, useRef for search input autofocus, and React Testing Library for component testing.

Technical Problem Review
    - Converted .jsx files to .tsx for TypeScript support.
    - Defined TypeScript interfaces to ensure type-safe component props.
    - Used TanStack Query for API fetching and loading/error handling.
    - Implemented Zustand for global dark/light theme management.
    - Used useRef to autofocus the search input on page load.
    - Added RTL tests to verify component rendering.

'https://jsonplaceholder.typicode.com/posts?_limit=20'