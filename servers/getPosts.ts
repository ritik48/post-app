import { connectDb } from "./db";
import { Post } from "./post.model";

export async function getPost() {
    try {
        await connectDb();

        const posts = await Post.find();

        return { success: true, posts: JSON.parse(JSON.stringify(posts)) };
    } catch (error) {
        return { success: false, posts: [] };
    }
}
