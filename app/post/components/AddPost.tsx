"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function AddPost() {
    const [title, setTitle] = useState<string | null>(null);

    const router = useRouter();

    async function addPost() {
        if (!title) {
            toast.error("Title cannot be empty");
            return;
        }

        const res = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify({ post: { title } }),
        });

        const data = await res.json();

        if (!data.success) {
            toast.error("Cannot add post");
            return;
        }

        toast.success("Post added");
        router.refresh();
    }

    return (
        <div className="flex flex-col gap-2 my-4">
            <input
                className="text-lg px-3 py-2 rounded-md border"
                placeholder="Enter title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={addPost}
                className="px-4 bg-black text-white w-fit py-2 rounded-md"
            >
                Add
            </button>
        </div>
    );
}
