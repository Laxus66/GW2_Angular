import Comic from "../models/comic";
import { comicSchema } from "../schemas/comic";

export const getAllComics = async (req, res) => {
    try {
        const comics = await Comic.find();
        return res.status(200).json(comics);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

export const getOneComic = async (req, res) => {
    try {
        const comicId = req.params.id;
        const comic = await Comic.findById(comicId);
        if (!comic) {
            return res.status(404).json({ message: 'Comic not found' });
        }
        return res.status(200).json(comic);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

export const createComic = async (req, res) => {
    try {
        const comicData = req.body;
        const validationResult = comicSchema.validate(comicData);
        if (validationResult.error) {
            return res.status(400).json({ message: validationResult.error.message });
        }
        const newComic = await Comic.create(comicData);
        return res.status(201).json(newComic);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

export const removeComic = async (req, res) => {
    try {
        const comicId = req.params.id;
        const deletedComic = await Comic.findByIdAndDelete(comicId);
        if (!deletedComic) {
            return res.status(404).json({ message: 'Comic not found' });
        }
        return res.status(200).json({ message: 'Comic deleted successfully' });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

export const updateComic = async (req, res) => {
    try {
        const comicId = req.params.id;
        const updatedData = req.body;
        const validationResult = comicSchema.validate(updatedData);
        if (validationResult.error) {
            return res.status(400).json({ message: validationResult.error.message });
        }
        const updatedComic = await Comic.findByIdAndUpdate({ _id: comicId }, updatedData, { new: true });
        if (!updatedComic) {
            return res.status(404).json({ message: 'Comic not found' });
        }
        return res.status(200).json(updatedComic);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

