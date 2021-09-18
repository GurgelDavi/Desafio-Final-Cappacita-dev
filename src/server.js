const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const gettingMovies = require('../moviesData/getting movies')

app.use(bodyParser.urlencoded({extended : true }))


app.get('/movies', async (req, res) => {
    const movies = await gettingMovies.getMoviesPlaying();
    res.send(movies)
}) 
app.get('/movies/:id', async (req, res) => {
    const movies = await gettingMovies.getMovie(req.params.id);
    res.send(movies)
}) 



app.listen(3003)