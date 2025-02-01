# 🎯 Leaderboard UI (Frontend)

## 🌟 Overview

The **Leaderboard UI** is a React-based frontend application that allows users to:

- **Select a user** and claim random points (1-10).
- **View the Leaderboard** with dynamically updated rankings.
- **Track a history** of awarded points for each user.
- **Add new users** dynamically.

The application is built using **ReactJS**, styled with **Bootstrap**, and interacts with a backend API to manage user data and rankings.

---

## 🌐 Live Demo

Check out the live version of the project here:  
👉 [Leaderboard UI](https://dainty-trifle-c79423.netlify.app/)

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS (Vite)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **HTTP Requests**: Axios
- **Styling**: Bootstrap 5
- **Alerts**: SweetAlert2
- **Routing**: React Router

---

## 🚀 Features

- **User Selection**: Displays a list of users with the ability to add new ones.
- **Claim Button**: Awards random points and updates the leaderboard.
- **Leaderboard**: Ranks users dynamically in descending order.
- **Points History**: Displays awarded points in reverse chronological order.
- **Pagination**: Supports paginated user lists.

---

## 🔗 API Integration

The frontend communicates with the **backend API** hosted on [Vercel](https://vercel.com/). The API endpoints include:

- **Fetch Users**: `GET /api/v1/leaderboard/users`
- **Add User**: `POST /api/v1/leaderboard/users`
- **Award Points**: `POST /api/v1/leaderboard/award-points`
- **Points History**: `GET /api/v1/leaderboard/points-history`

