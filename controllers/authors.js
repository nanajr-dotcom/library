export const getAuthor = (req, res) => {
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