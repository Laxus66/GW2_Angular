import express from 'express';
import { check } from '../middlewares/check';
import { createAuthor, getAllAuthors, getOneAuthor, removeAuthor, updateAuthor } from '../controllers/author';

const router = express.Router();

router.post('/author/add', check, createAuthor);
router.get('/author', getAllAuthors);
router.get('/author/:id', getOneAuthor);
router.delete('/author/:id', check, removeAuthor);
router.put('/author/:id', check, updateAuthor);

export default router;