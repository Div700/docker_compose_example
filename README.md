# 🚀 Docker Compose Example - Node.js & MongoDB

## 📌 Overview

This project demonstrates how to use Docker Compose to run a Node.js application connected to a MongoDB database.  It sets up two containers: one for the Node.js application and one for MongoDB, including initial data population.

## 📂 Project Structure

docker-compose-example/
├── app/
│   ├── server.js      # Main Node.js application
│   ├── package.json   # Node.js dependencies
│   └── .env           # Environment variables (optional)
├── mongo-init.js   # Initial MongoDB data insertion script
├── docker-compose.yml # Docker Compose configuration
└── README.md         # This file


## 🚀 Getting Started

### 1️⃣ Prerequisites

Make sure you have Docker and Docker Compose installed.  If not, follow these instructions:

- [Install Docker](https://www.docker.com/get-started)

Verify your installation:

```bash
docker --version
docker compose version
