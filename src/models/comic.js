import mongoose from "mongose"
const comicSchema = new mongoose.Schema({
    // Code
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Comic", comicSchema);