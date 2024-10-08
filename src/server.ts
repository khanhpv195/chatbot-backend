import app from "./app";

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Starting the server and logging the port it's running on
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
