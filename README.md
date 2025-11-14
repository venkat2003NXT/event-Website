📅 Event Discovery Web App

A responsive event discovery platform built using React + Vite, featuring recommended and upcoming events, smooth UI components, and clean routing.
The project loads event data from local JSON files, ensuring stable performance and error-free deployment.

🔗 Live Demo:
https://event-website-imtzrt8yd-venkats-projects-fab28006.vercel.app/

🚀 Features

🔐 Login & Signup pages with validation

🔒 Protected routes (Events page accessible only after login)

🎡 Recommended Shows carousel with auto-scroll

📅 Upcoming Events list with loading animation

🖼️ Reusable UI components (Navbar, Banner, EventCard, Spinner)

📱 Fully responsive design for mobile & desktop

🗂️ Event data sourced from local JSON files

🌐 Vercel deployed production build

🛠️ Tech Stack

React.js (Vite)

JavaScript (ES6+)

React Router DOM

Day.js

CSS

Git & GitHub

Vercel Deployment

📁 Folder Structure
event-Website/
├── public/
│   ├── banner.jpg
│   └── data/
│       ├── recommended.json
│       └── upcoming.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── EventCard.jsx
│   │   ├── RecommendedCarousel.jsx
│   │   ├── UpcomingList.jsx
│   │   └── Spinner.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Events.jsx
│   │
│   ├── utils/
│   │   ├── api.js
│   │   └── auth.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

⚙️ Installation & Local Setup
# Clone the repository
git clone https://github.com/venkat2003NXT/event-Website.git

cd event-Website

# Install dependencies
npm install

# Start development server
npm run dev

🏗️ Build for Production
npm run build


The build output will appear inside:

dist/

🌐 Deployment

This project is deployed using Vercel.

➡️ Build Command: npm run build
➡️ Output Directory: dist

Live URL:
https://event-website-imtzrt8yd-venkats-projects-fab28006.vercel.app/
