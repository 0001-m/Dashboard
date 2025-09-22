MERN Dashboard Project

A full-stack MERN (MongoDB, Express.js, React, Node.js) dashboard application with authentication, data visualization, and API integration.

Features
Frontend (React + MUI + Redux)

Built with React 19 and MUI v7 for modern UI components

Data visualization with Nivo charts (@nivo/bar, @nivo/pie, @nivo/geo)

Custom theming via theme.js

State management with Redux Toolkit

Organized folder structure with reusable components and scenes

Backend (Node.js + Express + MongoDB)

RESTful API with Express 5

Security via Helmet and CORS

Database models with Mongoose

Logging with Morgan

Hot reload with Nodemon

Project Structure
├── client (React frontend)
│   ├── src
│   │   ├── components/    # Reusable UI components
│   │   ├── scenes/        # Pages & feature modules
│   │   ├── state/         # Redux store & API setup
│   │   ├── theme.js       # Custom MUI theme
│   │   └── App.js
│   └── public/            # Static assets
│
├── server (Node.js backend)
│   ├── controllers/       # Route controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── data/              # Sample seed data
│   └── index.js           # Entry point
│
└── tree.js (helper script to print folder tree)

Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/mern-dashboard.git
cd mern-dashboard

2. Setup Server
cd server
npm install


Create a .env file inside /server with:

PORT=5000
MONGO_URL=your_mongodb_connection_string


Run the backend:

npm run dev

3. Setup Client
cd ../client
npm install
npm start

Scripts
Client

npm start → Start React app (development)

npm run build → Build React app for production

npm test → Run tests

Server

npm run dev → Start backend with Nodemon

npm start → Start backend with Node

Tech Stack

Frontend: React, Material-UI, Redux Toolkit, Nivo Charts, React Router

Backend: Node.js, Express.js, Mongoose, Helmet, CORS, Morgan

Database: MongoDB