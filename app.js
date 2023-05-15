let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let key = "7f9a3b82";

//get data from the API

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  //for if the input is blank
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter a movie title.</h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if ((data.Responce = "True")) {
          result.innerHTML = `
        
          <div class="info">
            <img src=${data.Poster} class="poster">
            <div>
            <h2>${data.Title}</h2>
              <div class="rating">
                <img src="img/star.png">
                <h4>${data.imdbRating}</h4>
              </div>
            <div class="details">
             <span>${data.Rated}<span>
             <span>${data.Year}<span>
             <span>${data.Runtime}<span>
            </div>
          <div class="genre">
            <div>${data.Genre.split(",").join("</div><div>")}</div>
          </div>
          </div>
          </div>
          <h3>Plot:</h3>
          <p>${data.Plot}</p>
          <h3>Cast:</h3>
          <p>${data.Actors}</p>
          `;
        } else if ((data.Responce = "False")) {
          result.innerHTML = `<h3 class="msg">${data.Error}testtesttest</h3>`;

        } else {
          result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getMovie);
// window.addEventListener("click", getMovie);
movieNameRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getMovie();
  }
});
