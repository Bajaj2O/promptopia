import connectDB from 'utils/db';
import Prompt from 'models/prompt';

const handler = async (req, res) => {
    const { creator, prompt, tag } = await req.json();
    try {
        await connectDB();
        const newPrompt = new Prompt({
            creator,
            prompt,
            tag:tag
        })
        await newPrompt.save();
        return new Response(200, { success: true, message: "Prompt created successfully" })
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        return new Response(500, { success: false, message: "Internal server error" })
    }
}

export { handler as POST}