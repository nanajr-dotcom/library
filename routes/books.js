import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createBook, deleteBook, getBook, getBookbyId, updateBook } from '../controllers/books.js'


const router = express.Router();
let books = [
    {
        "title": "Catfish in Black Bean Sauce",
        "author": "Fancie Bunny",
        "number_of_pages": 48,
        "category": "science fiction",
        "rating": 8,
        "id": 1
    },
    {
        "title": "Trip, The",
        "author": "Margette Piwall",
        "number_of_pages": 8,
        "category": "non fiction",
        "rating": 3,
        "id": 2
    },
    {
        "title": "Vessel of Wrath",
        "author": "Pansy O'Sherrin",
        "number_of_pages": 45,
        "category": "non fiction",
        "rating": 10,
        "id": 3
    },
    {
        "title": "Dragonheart",
        "author": "Terrence Wykey",
        "number_of_pages": 88,
        "category": "physics",
        "rating": 1,
        "id": 4
    }
]


router.get('/', getBook)

router.post('/', createBook)

router.get('/:id', getBookbyId)

router.delete('/:id', deleteBook)

router.patch('/:id', updateBook)


export default router;