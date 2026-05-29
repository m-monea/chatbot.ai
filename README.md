# Chatbot AI

Simple chatbot based on Google Gemini.

## Technologies

- React
- Vite
- Node.js
- Express
- Google Gemini API
- Vercel
- Render

## How it works

```text
Utente -> Frontend (Vercel) -> Backend (Render) -> Google Gemini -> Response
```

## Local deployment

Backend:

```bash
cd backend
npm install
npm start
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Environments

Backend:

```env
GEMINI_API_KEY=your_key
```

Frontend:

```env
VITE_API_URL=https://your-backend.onrender.com
```
