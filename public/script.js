const imgUrl = 'https://image.tmdb.org/t/p/w500/'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies()
function getMovies(){
     fetch('/movies').then(res => res.json().then(data =>{
         showMovies(data.results)
     }))
}
function searchMovies(query){
    fetch(`/movies/:${query}`).then(res => res.json().then(data =>{
        showMovies(data.results)
    }))
}


function showMovies(data){
    main.innerHTML = ''
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview,id} = movie;
        const movieElm = document.createElement('div');
        movieElm.classList.add('movie');
        movieElm.innerHTML = `
        <a href="/movie/${id}">
            <img src="${imgUrl+poster_path}" alt="${title}">
        </a>
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            <h3>Sinopse</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieElm)
    })
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchTerm = search.value;
    if (searchTerm) {
        searchMovies(searchTerm)
    }else{
        getMovies()
    }
})