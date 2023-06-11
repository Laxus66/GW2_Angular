import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
    name: String,
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Author", authorSchema);