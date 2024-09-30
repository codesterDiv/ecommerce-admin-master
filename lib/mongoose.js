import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    // const uri = process.env.MONGODB_URI;
    const uri =
  "mongodb+srv://test:test@cluster0.8nlmr.mongodb.net/sample_mflix?authSource=admin&replicaSet=atlas-ance8p-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
    return mongoose.connect(uri);
  }
}