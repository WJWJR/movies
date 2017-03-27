
function useJsonOnPage (json) {
     console.log(json);
     let title = document.querySelector('.movieTitle');
     title.textContent = json.title;
     /*let avatar = document.querySelector('img');
     avatar.src = 'https://image.tmdb.org/t/p/w500' + json.results[1].poster_path ;*/
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
