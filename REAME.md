# Book API

A RESTful CRUD API built with **Node.js, Express, and MongoDB using Mongoose**. The API allows you to create, read, update, and delete books.

## Features

* Create a new book
* Get all books
* Get a single book by ID
* Update a book by ID
* Delete a book by ID
* MongoDB database integration using Mongoose
* Environment variables using `dotenv`
* Request logging using `morgan`
* Mongoose schema validation
* Unique ISBN validation
* Error handling with `try/catch`

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Morgan

---

## Project Structure

```text
book-api/
│
├── db/
│   └── connection.js
│
├── models/
│   └── Book.js
│
├── routes/
│   └── booksRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## Installation

Clone the repository and navigate into the project:

```bash
git clone <>
cd book-api
```

Install the dependencies:

```bash
npm install
```

---

## Environment Variables

This project uses environment variables to store configuration values.

Create a `.env` file in the root of the project:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/book-api
```

If you are using **MongoDB Atlas**, use your MongoDB Atlas connection string instead:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
```

### Important

Do **not** commit your `.env` file to GitHub.

Your `.gitignore` should contain:

```gitignore
node_modules/
.env
```

---

## Running the Server

Start the application with:

```bash
npm start
```

The server should start at:

```text
http://localhost:3000
```

You should also see a MongoDB connection message similar to:

```text
Server is running at http://localhost:3000
Connected to MongoDB database: book-api
```

---

# API Endpoints

The base URL is:

```text
http://localhost:3000/api/books
```

## 1. Create a Book

**POST**

```text
/api/books
```

### Request Body

```json
{
    "title": "The Silent River",
    "author": "James Carter",
    "isbn": "9780000000001",
    "publishedDate": "2020-05-15",
    "inStock": true
}
```

### Example Response

```json
{
    "success": true,
    "message": "Book created successfully.",
    "book": {
        "_id": "64abc123...",
        "title": "The Silent River",
        "author": "James Carter",
        "isbn": "9780000000001",
        "publishedDate": "2020-05-15T00:00:00.000Z",
        "inStock": true
    }
}
```

---

## 2. Get All Books

**GET**

```text
/api/books
```

### Example

```text
GET http://localhost:3000/api/books
```

### Example Response

```json
{
    "success": true,
    "books": [
        {
            "_id": "64abc123...",
            "title": "The Silent River",
            "author": "James Carter",
            "isbn": "9780000000001",
            "publishedDate": "2020-05-15T00:00:00.000Z",
            "inStock": true
        }
    ]
}
```

---

## 3. Get a Single Book

**GET**

```text
/api/books/:id
```

### Example

```text
GET http://localhost:3000/api/books/64abc123...
```

The `:id` should be replaced with the MongoDB document ID.

---

## 4. Update a Book

**PUT**

```text
/api/books/:id
```

### Example

```text
PUT http://localhost:3000/api/books/64abc123...
```

### Request Body

```json
{
    "title": "The Silent River - Updated",
    "author": "James Carter",
    "isbn": "9780000000099",
    "publishedDate": "2022-05-15",
    "inStock": false
}
```

### Example Response

```json
{
    "success": true,
    "message": "Book updated successfully.",
    "book": {
        "_id": "64abc123...",
        "title": "The Silent River - Updated",
        "author": "James Carter",
        "isbn": "9780000000099",
        "publishedDate": "2022-05-15T00:00:00.000Z",
        "inStock": false
    }
}
```

---

## 5. Delete a Book

**DELETE**

```text
/api/books/:id
```

### Example

```text
DELETE http://localhost:3000/api/books/64abc123...
```

### Example Response

```json
{
    "success": true,
    "message": "Book deleted successfully.",
    "book": {
        "_id": "64abc123...",
        "title": "The Silent River",
        "author": "James Carter",
        "isbn": "9780000000001",
        "publishedDate": "2020-05-15T00:00:00.000Z",
        "inStock": true
    }
}
```

---

# Book Schema

The `Book` model contains the following fields:

| Field           | Type    | Required | Description                            |
| --------------- | ------- | -------- | -------------------------------------- |
| `title`         | String  | Yes      | Title of the book                      |
| `author`        | String  | Yes      | Author of the book                     |
| `isbn`          | String  | No       | Unique ISBN                            |
| `publishedDate` | Date    | No       | Publication date                       |
| `inStock`       | Boolean | No       | Whether the book is currently in stock |

The `inStock` field defaults to:

```text
true
```

The `isbn` field is configured as unique.

---

# Testing with Postman

You can test the API using Postman.

### Create

```text
POST http://localhost:3000/api/books
```

### Read All

```text
GET http://localhost:3000/api/books
```

### Read One

```text
GET http://localhost:3000/api/books/:id
```

### Update

```text
PUT http://localhost:3000/api/books/:id
```

### Delete

```text
DELETE http://localhost:3000/api/books/:id
```

For `POST` and `PUT` requests, select:

```text
Body → raw → JSON
```

---

# Error Handling

The API uses `try/catch` blocks to handle errors.

For example:

```json
{
    "success": false,
    "message": "Book not found.",
    "error_code": "BOOK_NOT_FOUND"
}
```

Internal server errors return:

```json
{
    "success": false,
    "message": "Error message",
    "error_code": "INTERNAL_SERVER_ERROR"
}
```

---

# Security

The `.env` file contains sensitive configuration information such as the MongoDB connection string.

Never commit `.env` to GitHub.

Use:

```gitignore
.env
node_modules/
```

in `.gitignore`.

---

# Author

Farrukh Murtaza
