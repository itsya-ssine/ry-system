# RY-SYSTEM

**A University Clubs & Activities Management Platform**

RY-SYSTEM is a university project developed collaboratively by **Yassine Elmajdoubi** and **Rihab Et-tam**. The platform aims to bring university clubs, students, and activities together in one place, making campus engagement and club management easier.

## Live Demo

Explore the application:

**[RY-SYSTEM — Live Demo](https://ry-system-frontend.vercel.app/)

## Features

- University clubs management
- Student participation in campus activities
- Club and activity discovery
- Role-based access for administrators, club managers, and students
- Centralized platform for university community engagement

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

### Backend
- PHP
- Composer
- MySQL

## Project Structure

```text
ry-system/
├── frontend/          # React + Vite application
│   ├── src/
│   ├── assets/
│   ├── services/
│   └── package.json
│
├── backend/           # PHP backend and API
│   ├── api/
│   ├── composer.json
│   └── vercel.json
│
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js and npm
- PHP
- Composer
- MySQL

### 1. Clone the repository

```bash
git clone https://github.com/itsya-ssine/ry-system.git
cd ry-system
```

### 2. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will be available at the URL displayed by Vite, usually `http://localhost:5173`.

### 3. Backend setup

Open another terminal:

```bash
cd backend
composer install
```

Configure the required environment variables and database connection according to the backend configuration.

Start the backend using the appropriate PHP development server or local deployment setup.

## Deployment

The application is deployed using Vercel.

The frontend and backend can be configured as separate Vercel projects using the same GitHub monorepo:

- Frontend project root: `frontend`
- Backend project root: `backend`

## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/itsya-ssine">
        <strong>Yassine Elmajdoubi</strong>
      </a>
      <br />
      Project Developer
    </td>
    <td align="center">
      <a href="https://github.com/rihabetm">
        <strong>Rihab Et-tam</strong>
      </a>
      <br />
      Project Developer
    </td>
  </tr>
</table>

## Academic Project

Developed as part of a university academic project, in collaboration between Yassine Elmajdoubi and Rihab Et-tam.

---

If you find this project interesting, feel free to explore the repository and the live demo.
