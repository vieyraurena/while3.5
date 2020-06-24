const numero = parseFloat(prompt('Ingrese la cantidad de asteriscos que tenga el triángulo'))

let lineaVertical = '';
let a = 0;

while(a < numero){
  lineaVertical = lineaVertical + '';
  a = a + 1;
  while (a < numero) {
    lineaVertical = lineaVertical + '* ';
    a = a + 1;
    console.log(lineaVertical);
  } 
}