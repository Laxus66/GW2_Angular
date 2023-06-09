import express from 'express';
import { check } from '../middlewares/check';
import { createCategory, getAllCategories, getOneCategory, removeCategory, updateCategory } from '../controllers/category';

const router = express.Router();

router.post('/category/add', check, createCategory);
router.get('/category', getAllCategories);
router.get('/category/:id', getOneCategory);
router.delete('/category/:id', check, removeCategory);
router.put('/category/:id/update', check, updateCategory);

export default router;