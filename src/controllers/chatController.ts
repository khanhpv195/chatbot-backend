import { Request, Response, NextFunction } from "express";
// Importing the chat service
import { getChatbotResponse } from "../services/chatService";

// This function handles the chat with bot functionality
export const chatWithBot = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extracting the message from the request body
    const { message } = req.body as { message?: string };
    // Checking if the message is provided
    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }
    // Getting the chatbot response for the given message
    const response = await getChatbotResponse(message);
    // Sending the chatbot response back to the client
    res.json({ response });
  } catch (error) {
    // Forwarding any errors to the next middleware or error handler
    next(error);
  }
};
