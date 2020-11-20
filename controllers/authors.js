import { v4 as uuidv4 } from 'uuid';

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

export const getAuthors = (req, res) => {
    res.send(authors)
}

export const createAuthor = (req, res) => {
    const author = req.body

    authors.push({ ...author, id: uuidv4()})
    res.send(`Author with name ${author.name} added to the database`)
}

export const getAuthorById = (req, res) => {
    const { id } = req.params

    const foundAuthor = authors.find((author) => author.id == id )
     res.send(foundAuthor)
}

export const deleteAuthor = (req, res) => {
    const { id } = req.params

    authors = authors.filter((authors) => authors.id !== id )

    res.send(`Author with the id ${id} deleted from the database.`)
}