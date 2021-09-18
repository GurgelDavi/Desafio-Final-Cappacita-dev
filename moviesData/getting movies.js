require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.API_KEY;



async function getMoviesPlaying(){
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-Br&page=1`
    try {
        const {data} = await axios.get(URL);
        return data
    } catch (error) {
        return (error)
    }
}

async function getMovie(id){
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
    try {
        const {data} = await axios.get(URL);
        return data
    } catch (error) {
        return (error)
    }
}

module.exports = {getMoviesPlaying, getMovie}