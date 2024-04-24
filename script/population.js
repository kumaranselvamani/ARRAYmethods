
//** find all the countries population of less than 2 lakhs using filter method */

const countriesApi = "https://restcountries.com/v3.1/all" ;

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    
const asianCountries = countriesData.filter(value => value.population<200000);
console.log(asianCountries);
}


  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", countriesApi);
  req.send();