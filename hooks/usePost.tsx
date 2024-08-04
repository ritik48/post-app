import { useState } from "react";

type Post = {
    title: string;
    _id: string;
};

export function usePost({ initialPosts }: { initialPosts: Post[] }) {
    const [posts, setPosts] = useState<Post[]>(initialPosts);

    return { posts, setPosts };
}
