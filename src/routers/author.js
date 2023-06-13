import express from 'express';
import { check } from '../middlewares/check';
import { createAuthor, getAllAuthors, getOneAuthor, removeAuthor, updateAuthor } from '../controllers/author';

const router = express.Router();

router.post('/author/add', createAuthor);
router.get('/author', getAllAuthors);
router.get('/author/:id', getOneAuthor);
router.delete('/author/:id', removeAuthor);
router.put('/author/:id/update', updateAuthor);

export default router;