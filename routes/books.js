import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createBook, deleteBook, getBookbyId, getBooks, updateBook } from '../controllers/books.js'


const router = express.Router();



router.get('/', getBooks)

router.post('/', createBook)

router.get('/:id', getBookbyId)

router.delete('/:id', deleteBook)

router.patch('/:id', updateBook)


export default router;