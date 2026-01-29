import PromptQuestion from "../models/prompt.model.js";

export const saveInDb = async (req, res) => {
    try {
        const { prompt, response } = req.body;
        if (!prompt || !response) {
            return res.status(400).json({
                error: "Prompt and response are required",
            });
        }

        const saved = await PromptQuestion.create({
            prompt,
            response,
        });

        return res.status(201).json(saved);

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            error: "Failed to save data",
        });
    }
};

export const getHistory = async (req, res) => {
    try {
        const history = await PromptQuestion.find().sort({ createdAt: -1 });
        res.json(history);
    } catch (err) {
         console.error("🔥 HISTORY ERROR:", err)
        res.status(500).json({ error: "Failed to fetch history" });
    }
}
