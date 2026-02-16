# URL Shortener App

A simple URL shortener website that converts long website addresses into short, manageable links. Users can input a long URL and an optional alias, and the system generates a short URL that redirects to the original link.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Application Logic](#application-logic)


## Features

- Generate short URL from long URL
- Custom alias or random alias generation
- Redirect to original URL using alias
- 404 error for non-existing URLs
- Display all shortened URLs in a table
- Server-side rendering
- MongoDB database integration
- Runs locally without crashes

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (or Pug/Handlebars, depending on your implementation)

## Installation

1. Clone the repository:

```bash
git clone (https://github.com/youssefsalehs/url-shortener)
```
2. Install dependencies:

```bash
npm install
```


3. Make sure MongoDB is running locally:

```bash
mongod
```

4. Start the server:

```bash
npm start
```

5. Open your browser and go to:

http://localhost:3000

## Usage

- Enter a long URL in the input form.

- Optionally, provide an alias. If none is provided, a random string will be generated.

- Submit the form.

- The shortened URL will appear in the table.

- Click the short URL or visit http://localhost:3000/{alias} to be redirected to the original URL.

## Application Logic

- User submits long URL + optional alias.

- URL is saved in MongoDB database.

- Visiting /alias redirects to the original URL.

- Accessing a non-existing alias displays a 404 error.


