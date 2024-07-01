# Numadic Messenger

## Overview

This project is a real-time chat application where users can sign up, log in, join or create chat rooms, and send/receive messages in real time. It uses modern web technologies to ensure the application is responsive and scalable.

## Demo of the App:

   [Numadic Messenger](https://youtu.be/PkGRgoXnP-E)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

## Features

- User registration, login & logout
- Real-time chat with WebSocket
- Search Users
- One-on-one chat & Group chat
- Create / Modify Group chat dynamically
- Persistent chat history
- User authentication with JWT
- Responsive design for mobile and desktop
- Real-time typing indicator
- View Online / Offline status

## Technologies Used

### Frontend

- ReactJS
- Chakra UI
- WebSocket (or Socket.IO) for real-time updates

### Backend

- Node.js
- Express.js
- JWT for authentication

### Database

- MongoDB

## Setup and Installation

1. **Set up environment variables:**
   Create a .env file in the root directory and add the following:

   ```sh
    NODE_ENV = development
    PORT = 3500
    MONGO_URI = your_mongodb_connection_string
    JWT_SECRET = your_jwt_secret
2. **Install dependencies:**
   Run this command at the root level.
   ```sh
    npm run build
3. **Run the application:**
   
   ```sh
   Run this command to start the backend server:
   npm run dev

   Now, in the other terminal run these commands to start the frontend server:
   cd frontend/
   npm run start

## Usage

- Open your browser and navigate to http://localhost:3000
- Register a new account or log in with an existing account.
- Join a chat room or create a new one.
- Start sending and receiving messages in real-time.


