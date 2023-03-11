# NODEJS-RESTfull-API-CRUD-HTTP

![secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f](https://user-images.githubusercontent.com/30796513/224491401-cd5c8a73-52ad-496a-8d83-e388e61eea41.png)

## Usage

This project uses one endpoint: `/api/posts`. The following CRUD operations can be performed using this endpoint:

- **Get all posts**: Retrieve a list of all posts by sending a `GET` request to `/api/posts`.

- **Get one post**: Retrieve a specific post by sending a `GET` request to `/api/posts/:id`, where `:id` is the unique identifier of the post.

- **Create a post**: Create a new post by sending a `POST` request to `/api/posts` with the following fields in the request body: `author` (required), `title` (required), `content` (required), and `picture` (optional).

- **Update a post**: Update an existing post by sending a `PUT` request to `/api/posts/:id`, where `:id` is the unique identifier of the post. The request body should contain the fields that you want to update.

- **Delete a post**: Delete an existing post by sending a `DELETE` request to `/api/posts/:id`, where `:id` is the unique identifier of the post.


## Technologies Used

- Node.js
- MongoDB
- Express

## Installation

- Clone the repository
- Install dependencies using `npm install`
- Run the server using `npm start`
