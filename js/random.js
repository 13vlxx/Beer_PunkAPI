const url = "https://api.punkapi.com/v2/beers/random";
const results = document.querySelector("#results");
const random = document.querySelector("#random");

random.addEventListener("click", function () {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (beers) {
      console.table(beers);
      for (let beer of beers) {
        const html = `
          <div class="beers">
            <div class="img">
              <img id="img${beer.id}" src="${beer.image_url}">
            </div>
              <h1 class="${beer.id}">${beer.name}</h1>
              <h2 class="${beer.id}">${beer.tagline}</h2>
              <p class="${beer.id}">Appearance date : ${beer.first_brewed}</p>
              <p class="${beer.id}">${beer.description}</p>
          </div>
          `;
        results.innerHTML = html;
      }
    });
});
