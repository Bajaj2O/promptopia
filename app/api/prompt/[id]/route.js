import connectDB from '@/utils/db';
import Prompt from '@/models/prompt';

export const GET = async (request, { params }) => {
    try {
        await connectDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectDB();

      
        const iPrompt = await Prompt.findById(params.id);

        if (!iPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        iPrompt.prompt = prompt;
        iPrompt.tag = tag;

        await iPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });

    } catch (error) {
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectDB();
        await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};