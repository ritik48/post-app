import { getPost } from "@/servers/getPosts";
import { AddPost } from "./components/AddPost";
import { DisplayPosts } from "./components/DisplayPosts";
import { PostProvider } from "@/hooks/usePost";

export default async function Post() {
    const { posts } = await getPost();

    return (
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
            <AddPost />
            <PostProvider initialPosts={posts} key={JSON.stringify(posts)}>
                <DisplayPosts />
            </PostProvider>
        </div>
    );
}
