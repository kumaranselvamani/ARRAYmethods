# Find Asian Countries using filter

1. Define the countriesApi variable with the [API URL](https://restcountries.com/v3.1/all)
2. Create an event listener for the load event, which will be triggered when the API response is received.
3. Inside the event listener (reqListener), you parse the response text as JSON and store it in the countriesData variable.
4. You filter the countries by checking if the first continent in the continents array is equal to “Asia”.
5. Finally,log the filtered Asian countries to the console.
    [code link](./script/asiancountries.js)

# filters out countries with a population less than 2 lakhs

1.  [REST Countries API](https://restcountries.com/v3.1/all) The countriesApi variable holds the URL for the REST Countries API, specifically the endpoint that retrieves information about all countries.
2.  Use an XHR object (req) to make an HTTP request to the specified API endpoint.
3.  open() method initializes the request with the HTTP method (GET) and the API URL.
4.  send() method sends the request to the server.
5.  The load event listener is attached to the XHR object (req). It fires when the response is received from the server.
6.  The response text is parsed as JSON using JSON.parse(this.responseText).
The resulting data is stored in the countriesData variable.
The filter() method is used to create a new array (asianCountries) containing only countries with a population less than 200,000.
Finally, the filtered countries are logged to the console.
    [code link](./script/population.js)

# print contries name,capital,flag using for each PaymentMethodChangeEvent
    
1. The countriesApi variable holds the URL for the REST Countries API, specifically the endpoint that retrieves information about all countries.
2. XHR (XMLHttpRequest):The code uses an XHR object (req) to make an HTTP request to the specified API endpoint.The open() method initializes the request with the HTTP method (GET) and the API URL.The send() method sends the request to the server.
3. Event Listener:The load event listener is attached to the XHR object (req). It fires when the response is received from the server.Inside the event listener function (reqListener):The response text is parsed as JSON using JSON.parse(this.responseText).The resulting data is stored in the countriesData variable.
4. The forEach() method is used to iterate over each country in the data.For each country, the common name (item.name.common), capital (item.capital[0]), and flag (PNG URL) (item.flags.png) are printed to the console.
    [code link](./script/detailscountries.js)

#   print total population of all countries using reduce method

1. The countriesApi variable holds the URL for the [REST Countries API](https://restcountries.com/v3.1/all)
2. XHR object (req) to make an HTTP request to the specified API endpoint. open() method initializes the request with the HTTP method (GET) and the API URL. send() method sends the request to the server.
3. The resulting data is stored in the countriesData variable.
4. The reduce() method is used to accumulate the total population. For each country, the population is added to the accumulator.
5. The final result is the total population of all countries, which is printed to the console.
    [code link](./script/reduce.js)

#   print the countries that use US dollar

1. The countriesApi variable holds the URL for the [REST Countries API](https://restcountries.com/v3.1/all)
2. XHR object (req) to make an HTTP request to the specified API endpoint. open() method initializes the request with the HTTP method (GET) and the API URL. send() method sends the request to the server.
3. load event listener is attached to the XHR object (req).The response text is parsed as JSON using JSON.parse(this.responseText)
4. The filter() method is used to create a new array containing only the countries that have the United States dollar (USD) as their official currency.
5. The map() method is then used to transform each country object into a simplified format with just the country name and currency.
6. The final result is logged to the console.
    [code link](./script/dollar.js)