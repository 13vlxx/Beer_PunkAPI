async function search() {
  // Récupération de l'élément input et de sa valeur
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value;

  // Construction de l'URL de l'API Punk en fonction de la recherche
  const url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;

  // Récupération des données de l'API Punk
  const response = await fetch(url);
  const data = await response.json();

  // Affichage des résultats dans la div "results"
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  if (data.length === 0) {
    resultsDiv.innerHTML = "Aucune bière trouvée.";
  } else {
    data.forEach((beer) => {
      const beerDiv = document.createElement("div");
      beerDiv.classList.add("container");
      beerDiv.innerHTML = `
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
      resultsDiv.appendChild(beerDiv);
    });
  }
}
