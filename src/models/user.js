import mongoose from "mongose"
const userSchema = new mongoose.Schema({
    // Code
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model("User", userSchema);