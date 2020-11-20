import express from 'express';

import { createAuthor, deleteAuthor, getAuthorById, getAuthors } from '../controllers/authors.js';
 

const router = express.Router();


router.get('/', getAuthors)

router.post('/', createAuthor)

router.get('/:id', getAuthorById)

router.delete('/:id', deleteAuthor)



export default router;