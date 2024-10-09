import axios from "axios";

// Function to get a response from the chatbot based on the user's message
export const getChatbotResponse = async (message: string): Promise<string> => {
  console.log("OPENAI_BASE_URL:", process.env.OPENAI_BASE_URL);
  console.log(
    "OPENAI_API_KEY:",
    process.env.OPENAI_API_KEY ? "Set" : "Not set"
  );

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
    console.error("Full error object:", JSON.stringify(error, null, 2));
    if (axios.isAxiosError(error) && error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    throw new Error("Failed to get response from chatbot");
  }
};
