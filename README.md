# react-dev-formative-1

## Formative Assessment: React "Mini Blog" Project

### Mini Blog - Dev Insights

A lightweight internal blogging platform built with **React + TypeScript + Vite**.  
Employees can share quick tips, insights, and updates related to web development.

## Getting Started

# Installation

# Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd mini-blog

# Install dependencies
npm install

# Running the App
npm run dev

This starts the Vite dev server. Open http://localhost:5173 in your browser.

## Components
- Header  
Functional component with a text-based logo ("Dev Insights") and a navigation link to "New Post".

- Post  
Reusable functional component that renders a single blog post.

Uses Styled Components for conditional styling.

- Highlights posts by a specific author.

Shows a "New!" badge for posts published within the last 24 hours.

Wrapped in React.memo for performance optimization.

- PostList  
Displays a list of hardcoded sample posts with proper TypeScript types.
Each post shows title, author, preview, and date.

- withLogger HOC  
Higher-Order Component that logs when a component mounts and unmounts.
It has been applied to PostList for demonstration.

- App  
Root component that integrates Header and PostList.

## Styling Choices
External CSS files (header.css, postlist.css) for global layout and structure.

Styled Components for scoped, dynamic styling in Post.tsx.

This combination demonstrates flexibility: CSS for shared styles and Styled Components for conditional logic.

## Optimization Strategies
React.memo: Prevents unnecessary re-renders of the Post component.

Unique keys: Each post in PostList uses a unique key prop.

HOC (withLogger): Adds lifecycle logging without modifying the wrapped component.

## Component Type Choices
Functional Components were chosen over class components:

Simpler syntax and easier to read.

Hooks provide lifecycle and state management without boilerplate.

Aligns with modern React best practices.

## Challenges & Reflections
Balancing styling approaches: Deciding when to use external CSS vs. Styled Components.
- Solution: CSS for global layout, Styled Components for conditional logic.

Optimization trade-offs: Understanding when React.memo is useful.
- Solution: Applied it to Post since props are stable and re-renders would be wasteful.

TypeScript typing: Ensuring posts had clear types for maintainability.
- Solution: Defined a PostType interface and reused it across components.

## External Libraries
styled-components - CSS-in-JS styling.

Type definitions: @types/react, @types/react-dom, @types/styled-components.

Core tooling: vite, typescript, eslint.

