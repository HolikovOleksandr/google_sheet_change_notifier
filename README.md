# Project Setup and Run Documentation

## 1. **Preparation for Running the Project**

Before running the project, make sure to follow the necessary setup steps.

### 1.1. Clone the Repository

Clone the repository of your project:

```bash
git clone https://github.com/google_sheet_change_notifier.git
cd google_sheet_change_notifier
```

### 1.2. Set Up .env Files

The project uses a single .env file for configuration:

.env — common configuration for all environments.

Ensure this file is correctly set up before running the project, `.env.example` will help you.

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

### 2.2. Access the Application

Once the containers are running, you can access your application:

- API will be available on http://localhost:3001
- PGAdmin will be available on http://localhost:5050

by default, or you set own ports.

## 3. Google Sheets API Integration

### 3.1 Create a Google Cloud Project:

Go to [Google Cloud Console](https://console.cloud.google.com/)

Create a new project or select an existing one.

### 3.2 Enable the Google Sheets API:

In the Google Cloud Console, navigate to API & Services -> Library.

Search for Google Sheets API and enable it.

### 3.3 Create Credentials:

Navigate to API & Services -> Credentials.

Click Create Credentials -> Service Account.

Download the generated credentials file and save it as credentials.json in your project root directory.

### 3.4 Set the Credentials Path:

In your `.env` file, set the path to the `credentials.json` file:

```
GOOGLE_SHEETS_CREDS_PATH=path/to/credentials.json
```

> Look carefully in the `.env.example` file

### 3.5 References

- #### Google Sheets API Documentation

  For more details on how to interact with the Google Sheets API, refer to the [Google Sheets API Documentation](https://developers.google.com/sheets/api/guides/concepts).

- #### Googleapis Node.js Client
  For detailed information on the googleapis Node.js client library used for this integration, see the [Googleapis Node.js Documentation](https://www.npmjs.com/package/googleapis#google-apis).
