import mongoose from "mongose"
const authorSchema = new mongoose.Schema({
    // Code
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Author", authorSchema);