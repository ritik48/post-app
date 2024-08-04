import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function Post({ title, _id }: { title: string; _id: string }) {
    const router = useRouter();
    async function deletePosts(_id: string) {
        try {
            const res = await fetch("/api/post/" + _id, {
                method: "DELETE",
            });
            const data = await res.json();

            if (!data.success) {
                toast.error("Cannot delete the post");
                return;
            }
            toast.success("Post delete successfully");
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong.");
        }
    }
    return (
        <div className="border px-6 py-2 flex items-center justify-between rounded-md">
            <div>{title}</div>
            <button
                onClick={async () => await deletePosts(_id)}
                className="px-2 rounded-md py-1 text-sm bg-zinc-800 text-zinc-200"
            >
                Delete
            </button>
        </div>
    );
}
