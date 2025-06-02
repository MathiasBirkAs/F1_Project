# 🏁 F1_Project

A modern fullstack Formula 1 web application: React frontend + Node.js/Express backend + MongoDB database.
Features drivers, teams, races, live standings, and race results — all in authentic F1 style.

## 🚦 Project Structure

F1_Project/
├── backend/       # Node/Express API & MongoDB models
├── F1_React/      # React frontend app
├── .gitignore
├── README.md

## 🛠️ Setup Instructions

### 1. Backend

cd backend
npm install

Create a .env.local file with:

NODE_ENV=development
SERVER_PORT=5000
SERVER_HOST=http://localhost:5000
MONGODB_URI=mongodb://127.0.0.1:27017/F1-API
JWT_SECRET=changeme
USE_JWT=false

Seed the database:

node seed.js

Start the API server:

npm run dev

### 2. Frontend

cd F1_React
npm install
npm run dev

Visit: http://localhost:5173

## 🏎️ Features

- Drivers & Teams: All 2025 data with images and bios
- Races: Full 2025 calendar, with circuit maps and details
- Standings: Live drivers, teams, and race results tables
- News: F1-style articles (static demo content)
- Design: Authentic dark F1 theme, fully responsive

## ⚡ Quick Notes

- Backend and frontend are decoupled; both must be running
- All data in backend/seed.js (rerun to wipe and reload demo content)
- MongoDB must be running locally (or update MONGODB_URI)
- News is static demo content, no API integration

## 👨‍💻 Author

Made by Mathias

## 📚 License

For educational/demo use only.