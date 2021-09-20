const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const gettingMovies = require('../moviesData/getting movies')


app.use(bodyParser.urlencoded({extended : true }))

app.get('/movies', async (req, res) => {
    try {
        const movies = await gettingMovies.getMoviesPlaying();
        return res.status(200).send(movies);
    } catch (error) {
        return error
    }
})

app.get('/movies/:query', async (req, res) => {
    try {
        const movies = await gettingMovies.searchMovie(req.params.query);
        return res.status(200).send(movies);
    } catch (error) {
        return error
    }
})

app.get('/movie/:id', async (req, res) => {
    try {
        const movies = await gettingMovies.getMovie(req.params.id);
        return res.status(200).send(movies);   
    } catch (error) {
        return error
    }
    
})
app.post('/movies/:query', async (req, res) => {
    try {
        const movies = await gettingMovies.trackActivity(req.params.query);
        return res.status(201).send(movies);
    } catch (error) {
        return error
    }
})

app.post('/movie/:id', async (req, res) => {
    try {
        const movies = await gettingMovies.trackClick(req.params.id);
        return res.status(201).send(movies);
    } catch (error) {
        return error
    }
})

app.listen(3003)
app.use(express.static('public'))