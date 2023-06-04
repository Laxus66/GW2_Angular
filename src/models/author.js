import mongoose from "mongose"
const authorSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    comic_id: {
        type: mongoose.Types.ObjectId,
        ref: "Comic",
    }
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Author", authorSchema);