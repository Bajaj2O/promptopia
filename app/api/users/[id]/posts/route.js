import connectDB from '@/utils/db';
import Prompt from '@/models/prompt';

const handler = async (req,{params}) => {
    
    try {
    
        await connectDB();
        const data = await Prompt.find({creator:params.id}).populate("creator");
        console.log(data);
        return new Response(JSON.stringify(data),{status:200}, { success: true })
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        return new Response(500, { success: false, message: "Failed to Fetch| Internal server error" })
    }
}

export { handler as GET}