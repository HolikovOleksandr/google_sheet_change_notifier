# Project Setup and Run Documentation

## 1. **Preparation for Running the Project**

Before running the project, make sure to follow the necessary setup steps.

### 1.1. Clone the Repository

Clone the repository of your project:

```bash
git clone https://github.com/your-repository-url.git
cd your-project-directory
```

### 1.2. Set Up .env Files

The project should have two main .env files:

- `.env` — common configuration for all environments.
- `.env.development` — configuration for development environment.
- `.env.production` — configuration for production environment.

Ensure these files are correctly set up before running the project.

### 1.3. Install Dependencies

Install the dependencies using Yarn or npm.

```
npm install
```

### 1.4. Set Up PostgreSQL Database

1. Make sure you have access to a PostgreSQL database. If you're using Docker, this will be automatically set up via the docker-compose.yml file.
2. If needed, create the database manually.

When running the project in Docker, the PostgreSQL container will be automatically set up and the database will be created.

## 2. Docker Setup

The project uses Docker for containerization, which allows you to run all services (including your API, PostgreSQL, Redis, and others) in containers.

### 2.1. Run the Project with Docker

To run the project with Docker, execute the following command:

```
docker-compose up --build
```

This will build and start all the necessary services:

- API — your NestJS application.
- PostgreSQL — the database.
- Redis — for caching.
- PgAdmin — a web interface to manage the database.

Docker will automatically look for the docker-compose.yml and Dockerfile files and use the values from the .env files to configure the containers.

## 2.2. Access the Application

Once the containers are running, you can access your application:

- API will be available on http://localhost:3001
- PGAdmin will be available on http://localhost:5050

Login credentials for PGAdmin:

- Username: admin
  Password: admin
