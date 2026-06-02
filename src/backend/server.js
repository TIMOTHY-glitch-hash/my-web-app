const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "../../public")));

// API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from my full stach app!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});