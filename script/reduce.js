
//** print total population of all countries using reduce method  ***/
const countriesApi = "https://restcountries.com/v3.1/all" ;

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    let totalpopulation = countriesData.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log(`Total population of all countries: ${totalpopulation}`);
}

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", countriesApi);
  req.send();