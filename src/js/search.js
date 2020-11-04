import { genres } from "./genre.js";
import { DOMSelectors } from "./index.js";


const listen = function () {
    DOMSelectors.searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      //search values
      const searchParams = DOMSelectors.searchArea.value;
      //async function
      const movieSearch = async function (){
        const query = "https://api.themoviedb.org/3/search/company?api_key=722a815252affd4774ebb49aa900cdb8&page=1";
        try {
            const response = await fetch(query);
            const data = await response.json();
            
            data.results.forEach((movie) => {
              let genreArr = [];
              const addGenre = function () {
                genres.forEach((element) => {
                  if (movie.genre_ids.includes(element.id)) {
                    genreArr.push(element.name);
                    return genreArr;
                  }
                });
              };
              addGenre();
    
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
    });
    movieSearch();  
};
  listen();