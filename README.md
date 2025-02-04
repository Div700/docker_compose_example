# 🚀 Docker Compose Example - Node.js & MongoDB

## 📌 Overview  
This is an example project for learning how **Docker Compose** works to run an application with multiple containers.  

In this project, we have **two containers**:  
1. **`node-app-container`** - Runs the main application (frontend + business logic) on port **3000**.  
2. **`mongo-container`** - Runs **MongoDB** with initial data insertion using `mongo-init.js` on port **27017**.  

---

## 📂 Project Structure  
📦 docker-compose-example │── 📂 app │ ├── 📄 server.js # Main Node.js application │ ├── 📄 package.json # Node.js dependencies │ ├── 📄 .env # Environment variables │── 📄 mongo-init.js # Initial MongoDB data insertion script │── 📄 docker-compose.yml # Docker Compose configuration │── 📄 README.md # Project documentation

---

## 🚀 Getting Started

### **1️⃣ Prerequisites**  
Ensure you have **Docker** and **Docker Compose** installed:  
- [Download Docker](https://www.docker.com/get-started)  

Check installation with:  
```sh
docker --version
docker compose version

###**2️⃣Running the Application with Docker Compose**
To run everything in Docker containers, follow these steps:

Clone this repository:
sh
Copy
Edit
git clone https://github.com/your-username/docker-compose-example.git
cd docker-compose-example
Start the containers:
sh
Copy
Edit
docker compose up --build
Visit: http://localhost:3000 to see the stored MongoDB data.
📦 Containers & Configuration
1️⃣ node-app-container (Application)
Runs the Node.js application.
Handles frontend + business logic.
Exposes port 3000.
2️⃣ mongo-container (Database)
Runs MongoDB on port 27017.
Uses mongo-init.js to insert initial data.
🔍 Verifying MongoDB Data
To check if data is inserted into MongoDB:

sh
Copy
Edit
docker exec -it mongo-container mongosh
Inside the shell:

sh
Copy
Edit
use mydatabase
db.datas.find().pretty()
🛑 Stopping & Removing Containers
To stop all running containers:

sh
Copy
Edit
docker compose down
To remove all containers and data:

sh
Copy
Edit
docker compose down -v
🎯 Next Steps
Modify mongo-init.js to insert different data.
Convert into microservices for better architecture.
Deploy to AWS, GCP, or Azure.
📜 License
This project is open-source and free to use.

yaml
Copy
Edit

---

This is a **GitHub-friendly** README file with proper formatting, sections, and markdown syntax. Just copy and paste it into your `README.md` file. 🚀🔥  

Let me know if you need any modifications! 😊
