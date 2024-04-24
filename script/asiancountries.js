
//** find asian countries using filter data on rest countries data */

const countriesApi = "https://restcountries.com/v3.1/all" ;

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    
const asianCountries = countriesData.filter(value => value.continents[0] === "Asia");
console.log(asianCountries);
}
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", countriesApi);
  req.send();