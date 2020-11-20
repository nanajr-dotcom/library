import { v4 as uuidv4 } from 'uuid';

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

export const createBook = (req, res) => {
    
    const book = req.body

    books.push({ ...book, id: uuidv4() })
    res.send(`Book with title ${book.title} added to the database`)
}

export const getBooks = (req, res) => {
    res.send(books)
}

export const getBookbyId = (req, res) => {
    const { id } = req.params

    const foundBook = books.find((book) => book.id == id )
     res.send(foundBook)
}

export const deleteBook = (req, res) => {
    const { id } = req.params

    books = books.filter((books) => books.id !== id )

    res.send(`Book with the id ${id} deleted from the database.`)
}

export const updateBook = (req, res) => {
    const { id } = req.params
    const { title, author, number_of_pages, category, rating } = req.body

    const book = books.find((book) => book.id == id )

    if (title) book.title = title
    if (author) book.author = author
    if (number_of_pages) book.number_of_pages = number_of_pages
    if (category) book.category = category
    if (rating) book.rating = rating


    res.send(`Book with the id ${id} has been updated`)
}

