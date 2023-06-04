import mongoose from "mongose"
const categorySchema = new mongoose.Schema({
    // Code
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("Category", categorySchema);