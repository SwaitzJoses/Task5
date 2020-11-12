//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/' , true)  
//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    var result = data.filter(x => x.population < 200000);
    result.filter(x =>console.log(x.name));

    
}

// output:

// Åland Islands
// 2lakhs.js:17 American Samoa
// 2lakhs.js:17 Andorra
// 2lakhs.js:17 Anguilla
// 2lakhs.js:17 Antarctica
// 2lakhs.js:17 Antigua and Barbuda
// 2lakhs.js:17 Aruba
// 2lakhs.js:17 Bermuda
// 2lakhs.js:17 Bonaire, Sint Eustatius and Saba
// 2lakhs.js:17 Bouvet Island
// 2lakhs.js:17 British Indian Ocean Territory
// 2lakhs.js:17 United States Minor Outlying Islands
// 2lakhs.js:17 Virgin Islands (British)
// 2lakhs.js:17 Virgin Islands (U.S.)
// 2lakhs.js:17 Cayman Islands
// 2lakhs.js:17 Christmas Island
// 2lakhs.js:17 Cocos (Keeling) Islands
// 2lakhs.js:17 Cook Islands
// 2lakhs.js:17 Curaçao
// 2lakhs.js:17 Dominica
// 2lakhs.js:17 Falkland Islands (Malvinas)
// 2lakhs.js:17 Faroe Islands
// 2lakhs.js:17 French Southern Territories
// 2lakhs.js:17 Gibraltar
// 2lakhs.js:17 Greenland
// 2lakhs.js:17 Grenada
// 2lakhs.js:17 Guam
// 2lakhs.js:17 Guernsey
// 2lakhs.js:17 Heard Island and McDonald Islands
// 2lakhs.js:17 Holy See
// 2lakhs.js:17 Isle of Man
// 2lakhs.js:17 Jersey
// 2lakhs.js:17 Kiribati
// 2lakhs.js:17 Liechtenstein
// 2lakhs.js:17 Marshall Islands
// 2lakhs.js:17 Micronesia (Federated States of)
// 2lakhs.js:17 Monaco
// 2lakhs.js:17 Montserrat
// 2lakhs.js:17 Nauru
// 2lakhs.js:17 Niue
// 2lakhs.js:17 Norfolk Island
// 2lakhs.js:17 Northern Mariana Islands
// 2lakhs.js:17 Palau
// 2lakhs.js:17 Pitcairn
// 2lakhs.js:17 Saint Barthélemy
// 2lakhs.js:17 Saint Helena, Ascension and Tristan da Cunha
// 2lakhs.js:17 Saint Kitts and Nevis
// 2lakhs.js:17 Saint Lucia
// 2lakhs.js:17 Saint Martin (French part)
// 2lakhs.js:17 Saint Pierre and Miquelon
// 2lakhs.js:17 Saint Vincent and the Grenadines
// 2lakhs.js:17 Samoa
// 2lakhs.js:17 San Marino
// 2lakhs.js:17 Sao Tome and Principe
// 2lakhs.js:17 Seychelles
// 2lakhs.js:17 Sint Maarten (Dutch part)
// 2lakhs.js:17 South Georgia and the South Sandwich Islands
// 2lakhs.js:17 Svalbard and Jan Mayen
// 2lakhs.js:17 Tokelau
// 2lakhs.js:17 Tonga
// 2lakhs.js:17 Turks and Caicos Islands
// 2lakhs.js:17 Tuvalu

