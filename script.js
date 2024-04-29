const countriesContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) =>
    data.map((data) => {
      console.log(data.capital);
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");

      countryCard.innerHTML = `
        <img src=${data.flags.svg} alt="flag-canada" />
        <div class="card-text">
            <h3 class="card-title">${data.name.common}</h3>
            <p><b>Capital: </b>${data.capital}</p>
            <p><b>Population: </b>${data.population.toLocaleString()}</p>
            <p><b>Region: </b>${data.region}</p>
        </div>`;

      countriesContainer.append(countryCard);
    })
  );
