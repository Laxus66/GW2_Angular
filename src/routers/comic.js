import express from 'express';
import { check } from '../middlewares/check';
import { createComic, getAllComics, getOneComic, removeComic, updateComic } from '../controllers/comic';

const router = express.Router();

router.post('/comic/add', check, createComic);
router.get('/comic', getAllComics);
router.get('/comic/:id', getOneComic);
router.delete('/comic/:id', check, removeComic);
router.put('/comic/:id', check, updateComic);

export default router;