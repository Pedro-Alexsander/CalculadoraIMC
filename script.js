function calc() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  if (altura < 9) {
    // foi a maneira que encotrei de burlar caso a pessoa coloque um número quebrado. Ex 1.83
    altura = altura * 100;
  }
  altura = altura / 100;

  let imc = peso / (altura * altura);
  imc = parseFloat(imc.toFixed(2));
  let mensagem = (document.getElementById("mensagem").innerHTML = imc);
  console.log(imc);

  console.log(peso);

  if (altura == 0 && peso == 0) {
    mensagem = document.getElementById("mensagem").innerHTML = 0;
    error = document.getElementById("error").innerHTML =
      "Informe um valor diferente de zero";
    classficacao = document.getElementById("classificacao").innerHTML = " ";
  }
  if (altura == 0 && peso !== 0) {
    mensagem = document.getElementById("mensagem").innerHTML = 0;
    error = document.getElementById("error").innerHTML = "Informe sua altura";
    classficacao = document.getElementById("classificacao").innerHTML = " ";
  }
  if (peso == 0 && altura !== 0) {
    mensagem = document.getElementById("mensagem").innerHTML = 0;
    error = document.getElementById("error").innerHTML = "Informe seu peso";
    classficacao = document.getElementById("classificacao").innerHTML = " ";
  }
  if (altura < 0 || peso < 0) {
    mensagem = document.getElementById("mensagem").innerHTML = 0;
    error = document.getElementById("error").innerHTML =
      "Informe um valor positivo";
    classficacao = document.getElementById("classificacao").innerHTML = " ";
  }
  if (imc < 18.5 && imc > 0) {
    let classficacao = (document.getElementById("classificacao").innerHTML =
      "Abaixo do peso");
  }
  if (imc >= 18.5 && imc < 25) {
    classficacao = document.getElementById("classificacao").innerHTML =
      "Peso normal";
  }
  if (imc >= 25 && imc < 30) {
    classficacao = document.getElementById("classificacao").innerHTML =
      "Sobrepeso";
  }
  if (imc >= 30 && imc < 35) {
    classficacao = document.getElementById("classificacao").innerHTML =
      "Obsidade grau I";
  }
  if (imc >= 35 && imc < 40) {
    classficacao = document.getElementById("classificacao").innerHTML =
      "Obsidade grau II";
  }
  if (imc >= 40 && peso !== 0 && altura !== 0) {
    classficacao = document.getElementById("classificacao").innerHTML =
      "Obsidade Mórbida";
  }
}
