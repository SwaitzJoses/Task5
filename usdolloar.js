//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/' , true)  
//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    
    var result = data.filter(x => x.currencies[0].code=== "USD");
    
    result.filter(x =>console.log(x.name))
    
    
}

// output:
// American Samoa
// usdolloar.js:19 Bonaire, Sint Eustatius and Saba
// usdolloar.js:19 British Indian Ocean Territory
// usdolloar.js:19 United States Minor Outlying Islands
// usdolloar.js:19 Virgin Islands (U.S.)
// usdolloar.js:19 Ecuador
// usdolloar.js:19 El Salvador
// usdolloar.js:19 Guam
// usdolloar.js:19 Marshall Islands
// usdolloar.js:19 Northern Mariana Islands
// usdolloar.js:19 Puerto Rico
// usdolloar.js:19 Timor-Leste
// usdolloar.js:19 Turks and Caicos Islands
// usdolloar.js:19 United States of America 