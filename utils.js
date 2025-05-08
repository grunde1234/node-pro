function generate(){
    return Math.floor(Math.random() * 1000000).toString(16).padStart(6, '0');
}

function celciusToFahrenheit(celcius){
    return (celcius * 9/5) + 32;
}


module.exports ={
 generate,
 celciusToFahrenheit
}