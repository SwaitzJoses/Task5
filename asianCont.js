//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/' , true)  
//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    const result = data.filter(x => x.region === "Asia");
    result.filter(x => console.log(x.name));

    // using for loop


    // console.log(data);
    // for(let i=0;i<250;i++){
    //     if(data[i].region === "Asia"){
    // console.log(data[i].name);
    //     }
    // }
}

// OUTPUT :

// Afghanistan
// asianCont.js:17 Armenia
// asianCont.js:17 Azerbaijan
// asianCont.js:17 Bahrain
// asianCont.js:17 Bangladesh
// asianCont.js:17 Bhutan
// asianCont.js:17 Brunei Darussalam
// asianCont.js:17 Cambodia
// asianCont.js:17 China
// asianCont.js:17 Georgia
// asianCont.js:17 Hong Kong
// asianCont.js:17 India
// asianCont.js:17 Indonesia
// asianCont.js:17 Iran (Islamic Republic of)
// asianCont.js:17 Iraq
// asianCont.js:17 Israel
// asianCont.js:17 Japan
// asianCont.js:17 Jordan
// asianCont.js:17 Kazakhstan
// asianCont.js:17 Kuwait
// asianCont.js:17 Kyrgyzstan
// asianCont.js:17 Lao People's Democratic Republic
// asianCont.js:17 Lebanon
// asianCont.js:17 Macao
// asianCont.js:17 Malaysia
// asianCont.js:17 Maldives
// asianCont.js:17 Mongolia
// asianCont.js:17 Myanmar
// asianCont.js:17 Nepal
// asianCont.js:17 Korea (Democratic People's Republic of)
// asianCont.js:17 Oman
// asianCont.js:17 Pakistan
// asianCont.js:17 Palestine, State of
// asianCont.js:17 Philippines
// asianCont.js:17 Qatar
// asianCont.js:17 Saudi Arabia
// asianCont.js:17 Singapore
// asianCont.js:17 Korea (Republic of)
// asianCont.js:17 Sri Lanka
// asianCont.js:17 Syrian Arab Republic
// asianCont.js:17 Taiwan
// asianCont.js:17 Tajikistan
// asianCont.js:17 Thailand
// asianCont.js:17 Timor-Leste
// asianCont.js:17 Turkey
// asianCont.js:17 Turkmenistan
// asianCont.js:17 United Arab Emirates
// asianCont.js:17 Uzbekistan
// asianCont.js:17 Viet Nam
// asianCont.js:17 Yemen






























