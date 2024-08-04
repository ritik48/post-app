"use client";

import { Post } from "./Post";
import { usePosts } from "@/hooks/usePost";

export function DisplayPosts() {
    const { posts } = usePosts()

    return (
        <div>
            <h3 className="my-2">Total posts: {posts.length}</h3>
            <div className="flex flex-col gap-2">
                {posts.map((post) => (
                    <Post
                        title={post.title}
                        _id={post._id}
                        key={JSON.stringify(post)}
                    />
                ))}
            </div>
        </div>
    );
}
