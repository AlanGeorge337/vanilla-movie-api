// function getPkmn(){
//     fetch(`https://pokeapi.co/api/v2/pokemon/mudkip`).then((result) => {
//         return result.json();
//     }).then((data) => {
//         console.log(data);
//     });
// }


const pkmn = "mewtwo";
async function getPkmn (){
    try{
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`);
        const data = await result.json();
        console.log(data);
    } 
        catch (error) {
            console.log(error);
            alert("did u mean mudkip?");
        }
}
getPkmn();



const DOMSelectors = {
    grid: document.querySelector(".movie-grid"),
};

const key = `722a815252affd4774ebb49aa900cdb8`;
const query = `https://api.themoviedb.org/3/movie/550?api_key=722a815252affd4774ebb49aa900cdb8`;

const init = async function (){
    try {
        const response = await fetch(query);
        const data = await response.json();
        data.results.forEach((movie) => {
            DOMSelectors.grid.insertAdjacentHTML("beforeend", `<div class="movie-card">
            <div class="movie-card-front">
              <img
                src="https://image.tmdb.org/t/p/w500/poster_path"
                alt=""
                class="poster"
              />
            </div>
            <div class="movie-card-back">
              <h3 class="movie-card-header">${movie.original_title}</h3>
              <div class="score-box">
                <p class="user-score">Community Score</p>
                <p class="user-score">${movie.vote_average}</p>
              </div>
    
              <div class="release-box">
                <p class="release-date">Released</p>
                <p class="release-date">${movie.release_date}</p>
              </div>
    
              <div class="movie-genres">
                <div>${genreArr}</div> 
              </div>
            </div>
          </div>`)
        })
    } catch (error) {
        console.log(error);
    }
}

init();