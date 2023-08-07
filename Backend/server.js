// server.js
const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Use any port you prefer

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
      const response = await axios.get('https://www.jsonkeeper.com/b/92Y7');
      res.json(response.data.greenhouses);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: 'Failed to fetch data' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
