const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: "Hello World!" });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

