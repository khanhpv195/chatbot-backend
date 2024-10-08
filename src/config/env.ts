import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Define required environment variables
const requiredEnvVars = ["OPENAI_API_KEY"];

// Check if all required environment variables are set
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

// Export environment variables
export default {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY as string,
};
