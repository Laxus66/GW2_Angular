import mongoose from "mongoose"

const comicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Tên là bắt buộc"],
    },
    author_id: {
        type: mongoose.Types.ObjectId,
        ref: "Author",
        required: [true, "ID tác giả là bắt buộc"],
    },
    images: {
        type: String,
        required: [true, "Danh sách hình ảnh là bắt buộc"],
    },
    story: {
        type: String,
        required: [true, "Story là bắt buộc"],
    },
    description: {
        type: String,
        required: [true, "Mô tả là bắt buộc"],
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: [true, "ID danh mục là bắt buộc"],
    },
}, { timestamps: true, versionKey: false });

export default mongoose.model("Comic", comicSchema);
