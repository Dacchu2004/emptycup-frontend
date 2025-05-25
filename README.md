
# EmptyCup Full Stack Assignment

This is a full-stack web application built as part of the EmptyCup Full Stack Assignment. It replicates a mobile-friendly designer portfolio listing from a Figma design, featuring dynamic shortlisting, API integration, and full deployment using Docker, Netlify, and Render.

## 🛠 Tech Stack

### Frontend:
- React (with Vite)
- TypeScript
- Tailwind CSS
- Font Awesome

### Backend:
- Flask (Python 3)
- Flask-CORS
- JSON-based mock data

### Deployment:
- Frontend: Netlify
- Backend: Render
- Local Dev: Docker & Docker Compose

---

## 📁 Project Structure

```
EmptyCup/
├── frontend/          # React + Vite app
│   ├── src/
│   ├── public/
│   └── Dockerfile
├── backend/           # Flask API
│   ├── app.py
│   ├── data.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started (Locally)

### 1. Clone the Repositories

```bash
git clone https://github.com/Dacchu2004/emptycup-frontend.git
git clone https://github.com/Dacchu2004/emptycup-backend.git
```

Place both folders inside a parent folder named `EmptyCup`.

### 2. Run with Docker Compose

Make sure Docker is installed, then run:

```bash
cd EmptyCup
docker compose up --build
```

- Frontend: http://localhost:5173  
- Backend API: http://localhost:5000/api/designers

---

## 🌐 Deployment Links

- 🔗 **Frontend (Netlify)**: [https://your-netlify-site.netlify.app](#)
- 🔗 **Backend (Render)**: [https://your-backend.onrender.com/api/designers](#)

Replace these with your actual live URLs.

---

## 🧪 Features

- Mobile-optimized UI replicating Figma design
- List of designers displayed dynamically
- Shortlisting functionality using React state
- Backend API serves data from JSON
- Dockerized deployment setup

---

## 📜 API Endpoint

- `GET /api/designers`  
  Returns a list of designer objects from `data.json`.

---

## 📄 Author

- Name: Dharshan S  
- Email: dharshans.2429@gmail.com