# Chatbot API

This is a simple chatbot API built using Node.js, Express, and OpenAI's GPT-3.5 model. The API allows users to send a message to the chatbot and receive a response.

## Environment Variables

The following environment variables are required to run the API:

- `OPENAI_API_KEY`: The API key for OpenAI.
- `PORT`: The port number on which the API will run.
- `OPENAI_BASE_URL`: The base URL for the OpenAI API.

## Routes

The API has a single route:

- `POST /`: This route accepts a JSON body with a `message` property. It sends the message to the chatbot and returns the response.

## How to Use

1. Clone the repository and install the dependencies using `npm install`.
2. Set the environment variables in a `.env` file.
3. Start the API using `npm start`.
4. Use a tool like Postman or cURL to send a POST request to `http://localhost:3000/` with a JSON body containing the `message` property.

Example Request Body:

```json
{
  "message": "Hello, how can I help you today?"
}
```

Example Response:

```json
{
  "response": "Hello! I'm happy to assist you with any questions or concerns you may have. How can I help you today?"
}
```
