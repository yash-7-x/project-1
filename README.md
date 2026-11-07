# Product Catalog API

A beginner backend project built using Node.js native HTTP module.

## Overview

This project provides HTTP endpoints to retrieve product information
through JSON responses.

## Technologies

- Node.js
- JavaScript
- Native HTTP module
- Git
- GitHub

## Features

- Home endpoint
- Health check endpoint
- Retrieve all products
- Retrieve individual products
- JSON responses
- HTTP status codes
- Basic error handling

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Welcome message |
| GET | /health | Server health |
| GET | /products | Get all products |
| GET | /products/:id | Get a product by ID |
| GET | /about | Application information |

## Installation

Clone the repository:

    git clone YOUR_REPOSITORY_URL

Navigate into the directory:

    cd product-catalog-api

Start the server:

    npm start

Server runs at:

    http://localhost:9000

## Current Limitations

- Product data is stored in memory.
- No database integration.
- Only GET requests are supported.
- No authentication.

## Future Improvements

- Add POST, PUT and DELETE endpoints.
- Integrate PostgreSQL.
- Add Redis caching.
- Add authentication.
- Add automated tests.
