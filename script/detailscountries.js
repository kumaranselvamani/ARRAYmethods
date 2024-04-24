
//** print the following details name,capital,flag using for each  ***/
const countriesApi = "https://restcountries.com/v3.1/all" ;

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    countriesData.forEach((item)=>console.log(item.name.common,item.capital[0],item.flags.png));
}

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", countriesApi);
  req.send();