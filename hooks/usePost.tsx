"use client";

import { useContext, useState } from "react";
import React, { createContext } from "react";

type Post = {
    title: string;
    _id: string;
};

type PostContextType = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[] | []>>;
};

const initialValue = {
    posts: [],
    setPosts: () => {},
};

const PostContext = createContext<PostContextType>(initialValue);

export const PostProvider = ({
    initialPosts,
    children,
}: {
    initialPosts: Post[];
    children: React.ReactNode;
}) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    
    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};

export function usePosts() {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error("Post provider was used outside of its context");
    }
    return context;
}
