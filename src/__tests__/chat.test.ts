import request from "supertest"; // Importing supertest for HTTP assertions
import app from "../app"; // Importing the app for testing

describe("POST /api/chat", () => {
  // Test case for missing message
  it("should return 400 if message is missing", async () => {
    const res = await request(app).post("/api/chat").send({}); // Sending an empty request
    expect(res.status).toBe(400); // Expecting a 400 status code
    expect(res.body).toHaveProperty("error", "Message is required"); // Expecting a specific error message
  });

  // Test case for a valid message
  it("should return 200 and a response for a valid message", async () => {
    const res = await request(app).post("/api/chat").send({ message: "Hello" }); // Sending a request with a valid message
    expect(res.status).toBe(200); // Expecting a 200 status code
    expect(res.body).toHaveProperty("response"); // Expecting a response property in the body
  });
});
