import { getPost } from "@/servers/getPosts";
import { AddPost } from "./components/AddPost";
import { DisplayPosts } from "./components/DisplayPosts";
import { initialize } from "next/dist/server/lib/render-server";

export default async function Post() {
    const { posts } = await getPost();

    return (
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
            <AddPost />
            <DisplayPosts initialPosts={posts} key={JSON.stringify(posts)} />
        </div>
    );
}
