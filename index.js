
function useJsonOnPage (json) {
    // console.log(json);
     let title = document.querySelector('.movieTitle');
     title.textContent = json.title;
     let poster_path = document.querySelector('img');
     poster_path.src = 'https://image.tmdb.org/t/p/w500' + json.poster_path;
     let overview = document.querySelector('.description');
     overview.textContent = json.overview;
     let release_date = document.querySelector('.openingDate');
     release_date.textContent = json.release_date;
     let popularity = document.querySelector('.following');
     popularity.textContent = json.popularity;
     let revenue = document.querySelector('.ticketSales');
     revenue.textContent = json.revenue;
     let runtime = document.querySelector('.duration');
     runtime.textContent = json.runtime;
   }
   //let json = { title: 'me', location: 'here'}
   fetch("https://api.themoviedb.org/3/movie/263115?api_key=" + key + " ")
     .then(response => response.json())
     .then(useJsonOnPage);



let searchButton = document.querySelector('#search');
searchButton.addEventListener('click', userClickedButton);

// Show User Clicking Search Button
function userClickedButton() {
  let userInPut = document.querySelector('#movies');
  let myInput = userInPut.value;
  console.log(myInput);
  fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key + "&query=" + myInput)
    .then(res => res.json())
    .then(obj => obj.results[0])
    .then(useJsonOnPage);
}



//fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key + "&query=+input.value()")
  //.then(response => response.json())
  //.then(json => useJsonOnPage(json.results[0]));
//.then(object => console.log(object));
