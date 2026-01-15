# Full Stack Application Setup

This project includes a Node.js + MongoDB backend and a Vite-based frontend.

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas (or local MongoDB)

## Project Structure

root
├── Backend
├── frontEnd
└── README.md

## Backend Setup

cd Backend
npm install -f

### Environment Variables

Create a file named `.env.local` inside the Backend directory:

PORT=3000
MONGO_URI="your_mongodb_atlas_connection_url"

### Run Backend

npm run dev

### Backend URLs

API Server: http://localhost:3000
Swagger Docs: http://localhost:3000/docs

## Frontend Setup

cd frontEnd
npm install -f

### Environment Variables

Create a file named `.env` inside the frontEnd directory:

VITE_API_URL=http://localhost:3000

### Run Frontend

npm run dev

### Frontend URL

Web App: http://localhost:5173

## Notes

- Ensure MongoDB Atlas allows your IP address
- Start backend before frontend
