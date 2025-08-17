# Overview

This is a personal portfolio website for Prem Shankar Tripathi, a web developer and BCA student. The application is built as a full-stack web application with a React frontend showcasing the developer's skills, projects, and experience, and a Node.js/Express backend that handles contact form submissions. The site features a modern, responsive design with sections for hero introduction, about information, projects showcase, skills visualization, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript, utilizing a component-based architecture with modern React patterns:
- **UI Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling with custom design system
- **Component Library**: Radix UI components for accessible, unstyled primitives
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod for validation
- **Animations**: Framer Motion for smooth animations and transitions

## Backend Architecture
The backend follows a simple REST API pattern built with Express.js:
- **Server Framework**: Express.js with TypeScript
- **Development Setup**: Vite integration for hot reloading in development
- **API Structure**: RESTful endpoints with proper error handling and validation
- **Request Handling**: JSON body parsing with URL encoding support
- **Logging**: Custom request/response logging middleware for API monitoring

## Data Storage Solutions
The application uses a flexible storage interface pattern:
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: Configured for PostgreSQL with Neon Database serverless
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development
- **Data Models**: Users table and contact messages table with proper relationships

## Authentication and Authorization
Currently implements a basic user schema foundation:
- **User Model**: Username/password based user schema defined
- **Storage Interface**: Prepared for user CRUD operations
- **Future Implementation**: Authentication system ready for implementation

## Contact Form System
Dedicated contact form functionality for portfolio inquiries:
- **Form Validation**: Zod schema validation for contact form data
- **Data Persistence**: Contact messages stored with timestamps
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Success Feedback**: Toast notifications for user feedback

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe ORM for database operations
- **PostgreSQL**: Primary database system for data persistence

## UI and Design
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool and development server with hot reloading
- **TypeScript**: Static type checking for better development experience
- **ESBuild**: Fast bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## State Management
- **TanStack React Query**: Server state management and caching
- **React Context**: Local state management for UI components

## Fonts and Assets
- **Google Fonts**: Outfit and Ovo font families
- **Static Assets**: Profile images and project assets served locally