//** print the countries that use US dollar */

const countriesApi = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    
    const usDollarCountries = countriesData.filter(country => {
        return country.currencies && country.currencies.hasOwnProperty('USD');
    }).map(country => {
        return {
            country: country.name.common,
            currency: 'USD'
        };
    });

    console.log(usDollarCountries);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", countriesApi);
req.send();