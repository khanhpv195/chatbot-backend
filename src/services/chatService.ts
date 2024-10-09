import axios from "axios";

// Function to get a response from the chatbot based on the user's message
export const getChatbotResponse = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(
      `${process.env.OPENAI_BASE_URL}/v1/chat/completions`,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    throw new Error("Failed to get response from chatbot");
  }
};
