# Simple-Blog-Website

## Overview
Simple-Blog-Website is a basic blog application built using Node.js and Express with EJS for templating. The application allows users to create, view, edit, and delete blog posts.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building web applications and APIs.
- **EJS**: Embedded JavaScript templating engine.
- **JavaScript**: Programming language used for both server-side and client-side logic.

## Dependencies
- **EJS**: Templating engine for rendering HTML views.
- **Express**: Web framework for handling HTTP requests and routing.
- **Nodemon**: Utility for automatically restarting the server during development.
- **Body-Parser**: Middleware for parsing request bodies.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/GaganMekala2004/Simple-Blog-Website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Simple-Blog-Website
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Routes
- **GET /**: Home page displaying all blog posts.
- **GET /create**: Page with a form to create a new blog post.
- **POST /submit-blog**: Endpoint to handle new blog submissions.
- **GET /edit/:id**: Page with a form to edit an existing blog post.
- **POST /edit-blog/:id**: Endpoint to handle blog updates.
- **GET /delete/:id**: Endpoint to delete a blog post.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
