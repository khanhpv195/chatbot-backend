import axios from "axios";

// Function to get a response from the chatbot based on the user's message
export const getChatbotResponse = async (message: string): Promise<string> => {
  try {
    // Sending a POST request to the OpenAI API to get a chatbot response
    const response = await axios.post(
      `${process.env.OPENAI_BASE_URL}/v1/chat/completions`,
      {
        model: "gpt-3.5-turbo", // Model used for generating the response
        messages: [{ role: "user", content: message }], // User's message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // API key for authentication
          "Content-Type": "application/json", // Content type of the request
        },
      }
    );

    // Returning the content of the first choice from the response
    return response.data.choices[0].message.content;
  } catch (error) {
    // Logging the error if the request fails
    console.error("Error calling chatbot API:", error);
    // Throwing a new error to handle the failure
    throw new Error("Failed to get response from chatbot");
  }
};
