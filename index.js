import express from 'express';
import bodyParser from 'body-parser';//this is to take in incoming post request bodies

import booksRoutes from './routes/books.js';
import authorsRoutes from './routes/authors.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json()); //initialise bodyParser 

app.use('/books', booksRoutes)
app.use('/authors', authorsRoutes)

//Routes
app.get('/', (req, res) => {
    res.send('Hello from Homepage')
});

app.listen(PORT, () => console.log (`Server running on port: http://localhost:${PORT}`)); //listen to incoming request on PORT

