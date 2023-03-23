# Task Management API

Simple Node/Express API to manage a tasks. Users can create, read, update, and delete tasks.

## Running the app

To run locally, run `npm install`, then `npm run start`
To run hot reloading, run `npm run dev`

Once the app is running locally, you can access the API at `http://localhost:1234/`

## Environment Variable

You can custom PORT where the app running by setting variables in the file .env-example and change its file extension into .env

## Testing with Swagger

Swagger documentation and testing available at `http://localhost:1234/docs`

To test with Swagger:

- Retrieve envelopes using `GET /api/v1/tasks`
- Retrieve a single envelope using `GET /api/v1/tasks/{id}`
- Create an envelope using `POST /api/v1/tasks`
- Update an envelope using `PUT /api/v1/tasks/{id}`
- Delete an envelope using `DELETE /api/v1/tasks/{id}`

## Tachnologies:

- [REST Architecture](https://auth0.com/blog/rest-architecture-part-1-building-api/)
- [Documenting API with Swagger](https://levelup.gitconnected.com/swagger-time-to-document-that-express-api-you-built-9b8faaeae563)
- [Exppress.js](https://expressjs.com/)
