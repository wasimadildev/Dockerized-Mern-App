# Dockerized MERN Practice Project

This repository is a practice project for a Dockerized MERN (MongoDB, Express.js, React, Node.js) application. The goal of this project is to demonstrate how to set up a full-stack application using Docker to containerize both the backend and frontend components.

## Project Structure

The project is organized into the following main directories:

- **backend**: Contains the server-side code, including API routes, controllers, and models.
- **frontend**: Contains the client-side code, built with React.
- **mongo**: Contains initialization scripts for setting up the MongoDB database.
- **docker-compose.yml**: Defines the services for the application, including the backend, frontend, and MongoDB.

## Features

- **Backend**: 
  - Built with Node.js and Express.js.
  - Connects to a MongoDB database.
  - Implements RESTful API endpoints.

- **Frontend**: 
  - Built with React.
  - Renders components and handles routing.

- **Docker**: 
  - Each component (backend, frontend, and MongoDB) is containerized using Docker.
  - Simplifies the development and deployment process.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd dockerized-mern-practice
   ```

3. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

4. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. This project is intended for educational purposes, and any improvements or enhancements are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.