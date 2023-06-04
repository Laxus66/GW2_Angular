import mongoose from "mongose"
const comicSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: String,
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    author_id: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Author",
        },
    ],
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Comic", comicSchema);