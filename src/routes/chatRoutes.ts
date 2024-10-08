import { Router } from "express"; // Importing the Router from express
import { chatWithBot } from "../controllers/chatController"; // Importing the chatWithBot function from chatController

const router = Router(); // Creating a new instance of the Router

router.post("/", chatWithBot); // Defining a POST route for the root path that calls the chatWithBot function

export default router; // Exporting the router
