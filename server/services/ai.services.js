import axios from 'axios'

export const askApi = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "liquid/lfm-2.5-1.2b-instruct:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

const answer = response.data.choices[0].message.content;

    return res.status(200).json({answer});
  } catch (err) {
    if (err.response) {
      console.error("OpenRouter error:", err.response.data);
    } else {
      console.error("Server error:", err.message);
    }

    return res.status(500).json({ error: "AI request failed" });
  }
};