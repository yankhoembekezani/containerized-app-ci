const express = require('express');
const pool = require('./db'); // your Postgres pool setup
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

// Database message endpoint
app.get('/message', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM messages LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('DB error');
  }
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

