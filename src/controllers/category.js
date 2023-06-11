import Category from "../models/category";
import { categorySchema } from "../schemas/category";

export const getAllCategories = async (req, res) => {
    try {
        // Code
        const categories = await Category.find({});
        if (!categories) {
            return res.json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.json({
            message: "Lấy sản phẩm thành công",
            categories,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


export const getOneCategory = async (req, res) => {
    try {
        // Code
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.json({
                message: "Không tìm thấy danh mục",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const createCategory = async (req, res) => {
    try {
        // Code
        const { error } = categorySchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const category = await Category.create(req.body);
        if (!category) {
            return res.json({
                message: "Thêm danh mục không thành công",
            });
        }
        return res.json({
            message: "Thêm danh mục thành công",
            category,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


export const removeCategory = async (req, res) => {
    try {
        // Code
        const category = await Category.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
            category,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        // Code
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!category) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            category,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}