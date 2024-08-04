import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function connectDb() {
    if (connection.isConnected) return;

    const db = await mongoose.connect(
        "mongodb://127.0.0.1:27017/test-next-cache"
    );
    connection.isConnected = db.connections[0].readyState;
}

export { connectDb };
