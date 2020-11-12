//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/' , true)  
//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    var result = data.filter(x => x.population);
    var arr=result.reduce((accumulator, currentValue) => { return currentValue.population + accumulator},0);
    console.log(arr);
    
}

// output:

//  7349137231
