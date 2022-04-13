function Converter() {
  var valorConverter = document.getElementById("temperatura").value;
  var grausPreenchido = parseFloat(valorConverter);  
  
  selecaoGraus(grausPreenchido);
  
    
}
//
function selecaoGraus(grausPreenchido) {
  var select1 = document.getElementById("Graus").value;
  var select2 = document.getElementById("Graus2").value;
  
  //Seleção principal, verifica se o campo de temperatura esta preenhido
   if(document.getElementById("temperatura").value == ""){
     var retornoDeResultado = document.getElementById("Resultado");
     var valorConvertido = "Por favor, preencha o campo de Temperatura.";
     retornoDeResultado.innerHTML = valorConvertido;
     
  }
  // if's se as seleções forem iguais ou alguma estiver vazia
  else if(select1 == select2) {
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = "Por favor, selecione tipos de graus diferentes.";
    retornoDeResultado.innerHTML = valorConvert;
  }
  else if(select1 == "Vazio" || select2 == "Vazio") {
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = "Selecione as duas opções de conversor";
    retornoDeResultado.innerHTML = valorConvert;
  }
  //if's de celsius para outras temperaturas
  else if(select1 == "Celsius" && select2 == "Fahrenheit") {
    var resultado = (grausPreenchido * 9/5) + 32;
    var xResultado = +(resultado.toFixed(2))
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = grausPreenchido + "°C equivalem a " + xResultado + " °F";
    retornoDeResultado.innerHTML = valorConvert;
  }
  else if(select1 == "Celsius" && select2 == "Kelvin") {
    var resultado = grausPreenchido + 273.15;
    var xResultado = +(resultado.toFixed(2))
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = grausPreenchido + "°C equivalem a " + xResultado + " °K";
    retornoDeResultado.innerHTML = valorConvert;
  }
  // if's de fahrenheint para outras temperaturas
  else if(select1 == "Fahrenheit" && select2 == "Celsius"){
    var resultado = (grausPreenchido - 32) * 5/9;
    var xResultado = +(resultado.toFixed(2))
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = grausPreenchido + "°F" + " equivalem a " + xResultado + " °C";
    retornoDeResultado.innerHTML = valorConvert;
  }
  else if(select1 == "Fahrenheit" && select2 == "Kelvin") {
    var resultado = (grausPreenchido - 32) * 5 / 9 + 273.15;
    var xResultado = +(resultado.toFixed(2))
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = grausPreenchido + "°F" + " equivalem a " + xResultado + " °K";
    retornoDeResultado.innerHTML = valorConvert;
  }
  // if's de kelvin para outras temperaturas
  else if(select1 == "Kelvin" && select2 == "Celsius") {
    var resultado = grausPreenchido - 273.15;
    var xResultado = +(resultado.toFixed(2));
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = grausPreenchido + "°K" + " equivalem a " + xResultado + " °C";
    retornoDeResultado.innerHTML = valorConvert;
  }
  else if(select1 == "Kelvin" && select2 == "Fahrenheit") {
    var resultado =  (grausPreenchido - 273.15) * 9/5 + 32;
    var xResultado = +(resultado.toFixed(2))
    //Retorno
    var retornoDeResultado = document.getElementById("Resultado");
    var valorConvert = grausPreenchido + "°K" + " equivalem a " + xResultado + " °F";
    retornoDeResultado.innerHTML = valorConvert;
  }
}