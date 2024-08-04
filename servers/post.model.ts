import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
