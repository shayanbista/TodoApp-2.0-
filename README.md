# Todo App API

This is a Todo App API built with Node.js and Docker. The API allows you to manage users and tasks, including authentication and token refresh functionality.

## Prerequisites

- Docker installed on your machine.
- A `.env` file with the necessary environment variables (refer to `.env.example`).

## Getting Started

### Pull the Docker Image

To get started, pull the Docker image from Docker Hub:

```sh
docker pull shayanbista786/todo:2.0
```

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /users   | Add a new user |
| POST   | /auth/login | Log in and get access token |
| GET    | /users   | View all users and tasks (requires authentication) |
| POST   | /auth/refresh-token | Get new access and refresh tokens |

Remember to always keep your access and refresh tokens secure.
