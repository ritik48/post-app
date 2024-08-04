import { Post } from "@/servers/post.model";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const _id = params.id;

        const post = await Post.findById(_id);
        if (!post) {
            return Response.json({
                success: false,
                message: "Invalid post id",
            });
        }

        await Post.findByIdAndDelete(_id);

        return Response.json({ success: true, message: "Deleted" });
    } catch (error) {
        return Response.json({
            success: false,
            message: "Cannot delete the post",
        });
    }
}
