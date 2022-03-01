function imc() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  console.log(peso / (altura * altura));
}
