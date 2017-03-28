
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


//Show User Inputing Movie Titles
function showUserInput(event) {
  //let input = event.target.innerText;
  input.innerHTML;
  console.log(showUserInput);
}

let input = document.querySelector('#movies');
input.innerHTML;

// Show User Clicking Search Button
function userClickedButton(event) {

}

let buttonClicked = document.querySelector('#search');
console.log(buttonClicked)
buttonClicked.addEventListener('click', userClickedButton);
//console.log(buttonClicked)
//fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key + " ")&query=+"input.value()")
