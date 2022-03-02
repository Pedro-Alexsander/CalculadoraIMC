function calc() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  if (altura < 9) {
    // foi a maneira que encotrei de burlar caso a pessoa coloque um número quebrado. Ex 1.83
    altura = altura * 100;
  }
  altura = altura / 100;

  let imc = peso / (altura * altura);
  imc = imc.toFixed(2);

  if (imc < 18.5) {
    let mensagem = (document.getElementById("mensagem").innerHTML = imc);
    let classficacao = (document.getElementById("classificacao").innerHTML = "Abaixo do peso")
  }if(imc >= 18.5 && imc<25 ){
    let mensagem = (document.getElementById("mensagem").innerHTML = imc);
    let classficacao = (document.getElementById("classificacao").innerHTML = "Peso normal")
  }if(imc >= 25 && imc<30 ){
    let mensagem = (document.getElementById("mensagem").innerHTML = imc);
    let classficacao = (document.getElementById("classificacao").innerHTML = "Sobrepeso")
  }if(imc >= 30 && imc<35 ){
    let mensagem = (document.getElementById("mensagem").innerHTML = imc);
    let classficacao = (document.getElementById("classificacao").innerHTML = "Obsidade grau I")
  }if(imc >= 35 && imc<40 ){
    let mensagem = (document.getElementById("mensagem").innerHTML = imc);
    let classficacao = (document.getElementById("classificacao").innerHTML = "Obsidade grau II")
  }if(imc >= 40 ){
    let mensagem = (document.getElementById("mensagem").innerHTML = imc);
    let classficacao = (document.getElementById("classificacao").innerHTML = "Obsidade Mórbida")
  }
}
