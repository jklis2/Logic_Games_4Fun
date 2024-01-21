import request from "supertest";
import app from "../index.js";

describe("Sending contact message", () => {
  it("should send a message successfully", async () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, this is a test message.",
    };

    const response = await request(app).post("/contact/send").send(validData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Success! Message was sent." });
  });

  it("should handle errors and return a 500 status code", async () => {
    const invalidData = "Invalid data";
    const response = await request(app).post("/contact/send").send(invalidData);

    expect(response.status).toBe(500);
    expect(response.body).toBeDefined();
  }, 10000);
});
