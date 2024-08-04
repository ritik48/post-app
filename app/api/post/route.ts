import { connectDb } from "@/servers/db";
import { Post } from "@/servers/post.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDb();

        const posts = await Post.find();

        return NextResponse.json({ success: true, posts });
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();

        const postData = body?.post;

        if (!postData) {
            return NextResponse.json({
                success: false,
                message: "Invalid data",
            });
        }

        const post = await Post.create({ ...postData });

        return NextResponse.json({ success: true, post });
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}
