console.log("Hello World");
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
module.exports = { sum };

/*
fromDollarToYen //dolars to yen
fromEuroToDollar //euro to dollar
fromYanToPound //yen to pounds
*/


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// function "formEuroToDollar"

const fromDollarToYen  = function(valueInDollar){
    // convert the value to yen
    let valueInYen = valueInDollar / oneEuroIs['USD']
    // return value
    return valueInYen * oneEuroIs['JPY'];
}

const fromEuroToDollar = function(valueInEuro){
    // convert the value to dollar
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromYenToPound  = function(valueInYen){
    // convert value to pounds
    let euro = valueInYen / oneEuroIs['JPY'];
    return euro * oneEuroIs['GBP'];
}

console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

module.exports = { sum , fromDollarToYen, fromEuroToDollar, fromYenToPound }