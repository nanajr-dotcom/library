import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createAuthor, deleteAuthor, getAuthor, getAuthorById } from '../controllers/authors.js';
 

const router = express.Router();
let authors = [
    {
        "name": "Willie Aucourte",
        "rating": 1,
        "books": {
            "title": "Presto"
        },
        "authorId": "4ab4ae6a-2d07-401d-9d5a-9db18ce9340f",
        "id": 1
    },
    {
        "name": "Town Hanbridge",
        "rating": 10,
        "books": {
            "title": "The Butterfly Effect 2"
        },
        "authorId": "2fb330ae-e9f2-4391-b53f-235626a41ae0",
        "id": 2
    },
    {
        "name": "Rodd Lottrington",
        "rating": 6,
        "books": {
            "title": "Ruins, The"
        },
        "authorId": "e265038d-871e-41ce-b3ff-fb26d328ce0f",
        "id": 3
    }
]

router.get('/', getAuthor)

router.post('/', createAuthor)

router.get('/:id', getAuthorById)

router.delete('/:id', deleteAuthor)



export default router;