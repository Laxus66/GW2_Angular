import joi from "joi";
export const comicSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Tên không được để trống",
        "any.required": "Tên là bắt buộc",
    }),
    author_id: joi.string().required().messages({
        "number.base": "ID tác giả phải là một số",
        "any.required": "ID tác giả là bắt buộc",
    }),
    images: joi.string().required().messages({
        "string.empty": "image không được để trống",
        "any.required": "image là bắt buộc",
    }),
    // images: joi.array().items(joi.object({
    //     id: joi.number().required().messages({
    //         "number.base": "ID hình ảnh phải là một số",
    //         "any.required": "ID hình ảnh là bắt buộc",
    //     }),
    //     image: joi.string().required().messages({
    //         "string.empty": "Hình ảnh không được để trống",
    //         "any.required": "Hình ảnh là bắt buộc",
    //     }),
    // })).required().messages({
    //     "array.base": "Danh sách hình ảnh phải là một mảng",
    //     "any.required": "Danh sách hình ảnh là bắt buộc",
    // }),
    story: joi.string().required().messages({
        "string.empty": "story không được để trống",
        "any.required": "story là bắt buộc",
    }),
    description: joi.string().required().messages({
        "string.empty": "Mô tả không được để trống",
        "any.required": "Mô tả là bắt buộc",
    }),
    category_id: joi.string().required().messages({
        "number.base": "ID danh mục phải là một số",
        "any.required": "ID danh mục là bắt buộc",
    }),
});
