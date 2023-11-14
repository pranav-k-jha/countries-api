const countriesContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => 
    data.map((country) => {
      if(country.capital){
      console.log(country.capital);
      }
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `/country.html?name=${country.name.common}`;
      countryCard.innerHTML = `
        <img src=${country.flags.svg} alt=${country.name.common} flag/>
        <div class="card-text">
            <h3 class="card-title">${country.name.common}</h3>
            <p><b>Capital: </b>${country.capital}</p>
            <p><b>Population: </b>${country.population.toLocaleString()}</p>
            <p><b>Region: </b>${country.region}</p>
        </div>`;

      countriesContainer.append(countryCard);
    })
  );
