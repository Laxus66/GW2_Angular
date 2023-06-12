import User from "../models/user";
import bcrypt from "bcryptjs";
import { signinSchema, signupSchema } from "../schemas/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
export const signUp = async (req, res) => {
  console.log("Đăng ký");
  try {
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);

      return res.status(400).json({
        messages: errors,
      });
    }

    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        messages: "Email đã tồn tại",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
    user.password = undefined;
    return res.status(201).json({
      message: "Tạo tài khoản thành công",
      accessToken: token,
      user,
    });
  } catch (error) { }
};

export const signIn = async (req, res) => {
  console.log("Đăng nhập");
  try {
    const { error } = signinSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);

      return res.status(400).json({
        messages: errors,
      });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        messages: "Email không tồn tại",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        messages: "Sai mật khẩu",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }); user.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập thành công",
      accessToken: token,
      user,
    });
  } catch (error) { }
};

export const getUsers = async (req, res) => {
  console.log("Danh sách users");
  try {
    const users = await User.find();
    return res.status(200).json({
      users,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách người dùng" });
  }
};

export const deleteUser = async (req, res) => {
  console.log("Xóa users");
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "Xóa người dùng thành công" });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi khi xóa người dùng" });
  }
};
