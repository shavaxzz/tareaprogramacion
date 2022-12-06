
var numero  = parseInt(prompt("ingrese numero entero"));{

var suma = numero*(numero+1)/2;

console.log(suma);
}
var numerodos =prompt("ingrese el segundo numero entero");
var sumados=0;
var natural;

for ( natural = 1; natural <=numerodos; natural++) {
        sumados+=(natural);
}

console.log(sumados);


if(suma==sumados){
   console.log("Son iguales");

}else{
    console.log("no son iguales");
}
