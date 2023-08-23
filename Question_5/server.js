const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = process.env.PORT || 3001;

// Use the cors middleware to enable CORS
app.use(cors());
app.use(express.json());

// ... Your route definitions here

// Start the server
app.listen(PORT, () => {
  console.log(`EXPRESS Server is running on port ${PORT}`);
});
