import express from 'express';
import { check } from '../middlewares/check';
import { createComic, getAllComics, getOneComic, removeComic, updateComic } from '../controllers/comic';

const router = express.Router();

router.post('/comic/add', createComic);
router.get('/comic', getAllComics);
router.get('/comic/:id', getOneComic);
router.delete('/comic/:id', removeComic);
router.put('/comic/:id/update', updateComic);

export default router;