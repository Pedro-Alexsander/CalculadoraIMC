function calc() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  if (altura < 9) {
    // foi a maneira que encotrei de burlar caso a pessoa coloque um número quebrado. Ex 1.83
    altura = altura * 100;
  }
  altura = altura / 100;

  let imc = peso / (altura * altura);
  console.log(imc.toFixed(2));
  console.log(altura);
}
