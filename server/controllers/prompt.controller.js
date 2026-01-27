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
