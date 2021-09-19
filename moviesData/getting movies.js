require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3'



async function getMoviesPlaying(){
    const URL = `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=pt-Br&page=1`
    try {
        const {data} = await axios.get(URL);
        return data
    } catch (error) {
        return (error)
    }
}

async function getMovie(id){
    const URL = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=pt-BR`
    try {
        const {data} = await axios.get(URL);
        return data
    } catch (error) {
        return (error)
    }
}

async function searchMovie(query){
    const URL = `${baseUrl}/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}&page=1&include_adult=false`
    try {
        const {data} = await axios.get(URL);
        return data
    } catch (error) {
        return (error)
    }
}

module.exports = {getMoviesPlaying, getMovie, searchMovie}