const express = require('express');
const cors = require('cors');
const translate = require('translate-google');

const app = express();
app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse JSON request body

app.post('/translate', async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;

  try {
    const translatedText = await translate(text, { from: sourceLang, to: targetLang });
    res.json({ translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error translating text' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
