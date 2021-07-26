import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola mundo 2')
})
app.get('/nueva-ruta', (req, res) => {
    res.send('nueva ruta')
})


app.listen(port, () => {
    console.log(`App running at port: http://localhost:${port}`)
})