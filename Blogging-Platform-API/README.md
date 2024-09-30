# Blogging Platform API

A simple RESTful API with basic CRUD operations for a personal blogging platform.
Project url: [Roadmap.sh/blogging-platform-api](https://roadmap.sh/projects/blogging-platform-api)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Development](#development)
- [Production](#production)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete blog posts
- Filter, sort, and search posts
- Error handling for development and production environments
- MongoDB integration with Mongoose
- Express.js framework

## Prerequisites

- Node.js (>=10.0.0)
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   NODE_ENV=development
   PORT=3000
   DATABASE=your_mongodb_connection_string
   DATABASE_PASSWORD=your_database_password
   ```

## Usage

To start the development server:

```
npm start
```

To start the production server:

```
npm run start:prod
```

## API Endpoints

- `GET /api/v1/posts`: Get all posts
- `POST /api/v1/posts`: Create a new post
- `GET /api/v1/posts/:id`: Get a specific post
- `PATCH /api/v1/posts/:id`: Update a specific post
- `DELETE /api/v1/posts/:id`: Delete a specific post

## Error Handling

The API includes comprehensive error handling for both development and production environments. In development, detailed error information is provided, while in production, only operational errors are exposed to the client.

## Development

The project uses ESLint and Prettier for code formatting and linting. To run the linter:

```
npx eslint .
```

To automatically fix linting issues:

```
npx eslint . --fix
```

## Production

For production deployment, set the `NODE_ENV` environment variable to `production` in your `.env` file or deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Project Structure

- `server.js`: Entry point of the application
- `app.js`: Express application setup
- `routes/`: API route definitions
- `controllers/`: Request handlers
- `models/`: Mongoose models
- `utils/`: Utility functions and classes

## Dependencies

```json:package.json
startLine: 13
endLine: 18
```

## Dev Dependencies

```json:package.json
startLine: 19
endLine: 29
```

For more details on the project structure and implementation, please refer to the individual files in the repository.
