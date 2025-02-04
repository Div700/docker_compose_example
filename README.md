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
2️⃣ Running the Application
Clone the repository:
<!-- end list -->

Bash

git clone [https://github.com/your-username/docker-compose-example.git](https://github.com/your-username/docker-compose-example.git)  # Replace with your repo URL
cd docker-compose-example
Start the containers:
<!-- end list -->

Bash

docker compose up -d --build  # -d for detached mode (runs in the background)
Access the application:
Visit http://localhost:3000 in your browser to view the application.

📦 Containers & Configuration
1️⃣ node-app-container (Application)
Runs the Node.js application.
Handles frontend and/or backend logic.
Exposes port 3000.
Uses the app directory as its working directory.
2️⃣ mongo-container (Database)
Runs MongoDB on the default port 27017 (mapped to the host).
Uses mongo-init.js to insert initial data when the container starts.
Data is persisted in a Docker volume (see docker-compose.yml).
🔍 Verifying MongoDB Data
Access the MongoDB container:
<!-- end list -->

Bash

docker exec -it mongo-container mongosh
Check the data:
<!-- end list -->

JavaScript

use mydatabase  // Replace 'mydatabase' with your database name
db.datas.find().pretty() // Replace 'datas' with your collection name
Exit the MongoDB shell:
<!-- end list -->

JavaScript

exit
🛑 Stopping & Removing Containers
Stop containers:
<!-- end list -->

Bash

docker compose down
Stop and remove containers and volumes (including data):
<!-- end list -->

Bash

docker compose down -v
⚙️ Customization
mongo-init.js: Modify this script to insert your desired initial data into MongoDB.
.env: Create a .env file in the app directory to manage environment variables for your Node.js application. This is a good practice for sensitive information. Example: DATABASE_URL=mongodb://mongo:27017/mydatabase (Note: mongo is the service name in docker-compose.yml which resolves to the mongo container's network address).
docker-compose.yml: Adjust ports, volumes, and other settings as needed. For example, you can change the exposed port for the Node.js application.
🎯 Next Steps
Microservices: Explore how to break down the application into smaller, independent microservices using Docker Compose.
Deployment: Learn how to deploy this application to platforms like AWS, Google Cloud, or Azure.
Testing: Implement unit and integration tests for your Node.js application and database.
