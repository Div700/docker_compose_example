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
