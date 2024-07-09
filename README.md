# Watcher Knight Voting System

## Description

The Watcher Knight Voting System is a web application that allows registered users to vote for their preferred candidates.

## Features

- **User Authentication and Authorization:**
  - Users can register, log in, and receive JWT tokens for authentication.
  - Admin users have additional privileges to add candidates.

- **Candidate Management:**
  - Admins can add candidates who must be registered users.

- **Voting System:**
  - Users can vote for candidates, with measures in place to prevent duplicate voting.

- **Logging:**
  - HTTP requests are logged using `morgan` for tracking server events.

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (using Mongoose)
  - JWT for authentication
  - bcrypt for password hashing
  - morgan for HTTP request logging

- **Frontend:**
  - HTML
  - CSS (basic styling)
  - JavaScript (basic scripting for user interaction)

## Getting Started

1. **Clone the repository**
2. **Install dependencies** :
`npm install`

3. **start the server** :start the server in development mode: `npm run dev`

Access the application:

4. **Access the application**: Open your browser and go to http://localhost:3000. Then use the provided forms and scripts to register, log in, and vote.

## API Endpoints
- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Log in and receive a JWT token.
- POST /api/candidates: Add a new candidate (admin only).
- POST /api/candidates/vote: Vote for a candidate (normal user).





