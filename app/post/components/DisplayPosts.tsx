"use client";

import { useState } from "react";
import { Post } from "./Post";
import { usePost } from "@/hooks/usePost";

type PostType = {
    title: string;
    _id: string;
};

export function DisplayPosts({ initialPosts }: { initialPosts: PostType[] }) {
    const { posts } = usePost({ initialPosts });

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
