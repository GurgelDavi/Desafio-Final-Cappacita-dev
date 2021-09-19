const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const gettingMovies = require('../moviesData/getting movies')


app.use(bodyParser.urlencoded({extended : true }))

app.get('/movies', async (req, res) => {
    const movies = await gettingMovies.getMoviesPlaying();
    res.send(movies)
})

app.get('/movies/:query', async (req, res) => {
    const movies = await gettingMovies.searchMovie(req.params.query);
    res.send(movies)
})

app.get('/movie/:id', async (req, res) => {
    const movies = await gettingMovies.getMovie(req.params.id);
    res.send(movies)
})
app.post('/movies/:query', async (req, res) => {
    const movies = await gettingMovies.trackActivity(req.params.query);
    res.send(movies)
})

app.post('/movie/:id', async (req, res) => {
    const movies = await gettingMovies.trackClick(req.params.id);
    res.send(movies)
})

app.listen(3003)
app.use(express.static('public'))