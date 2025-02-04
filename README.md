# Docker Compose Example: Node.js and MongoDB  

This is an example project for learning how **Docker Compose** works for running an application with multiple containers.  

## Project Overview  

This project consists of two containers:  

- **`node-app-container`** (Node.js Application)  
  - Runs the main application, including both frontend and business logic.  
  - Fetches and displays data from MongoDB.  
  - Runs on port **3000**.  

- **`mongo-container`** (MongoDB Database)  
  - Stores application data.  
  - Initializes with predefined data using `mongo-init.js`.  
  - Runs on port **27017**.  

---

## Folder Structure  

```
docker-compose-project/
│── app/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── Dockerfile
│── mongo-init.js
│── docker-compose.yml
│── README.md
```

---

## How It Works  

- The **MongoDB container** starts first and loads initial data from `mongo-init.js`.  
- The **Node.js application** connects to MongoDB and fetches the stored data.  
- Users can visit `http://localhost:3000/` to see the stored data.  

---

## Setup & Run With Docker  

### Step 1: Clone the Repository  

First, clone this repository to your local machine:  

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Step 2: Build and Start Containers  

Run the following command in the project root directory:  

```sh
docker-compose up -d --build
```

### Step 3: Check Running Containers  

```sh
docker ps
```

You should see `mongo-container` and `node_app-container` running.  

### Step 4: Access the Application  

Go to:  

```
http://localhost:3000/
```

You should see the initial data fetched from MongoDB.  

---

## Stop and Remove Containers  

To stop the running containers:  

```sh
docker-compose down
```

To remove all containers, networks, and volumes:  

```sh
docker-compose down --volumes
```
