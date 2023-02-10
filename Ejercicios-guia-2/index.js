//Escriba un programa que permita imprimir en pantalla cada uno de los elementos del siguiente arreglo: [0, 28, 30, 10, 4]//

let arreglo = [0, 28, 30, 10, 4]; 
console.table(arreglo); 

//Llamar a cada elemento según indice//


console.log(arreglo[0]);
console.log(arreglo[1]);

//Llamar de otra forma
// Defionir variable que haga referencia al indice del Array 

let indice = 0
// Definimos un ciclo While que imprima el indice mencionado y luego aumenta en uno ese valor, una vez el valor de la variable indice llegue a la longitud (length), del arreglo, el ciclo se detiene 

while (indice < arreglo.length){
  console.log(arreglo[indice]); 
  indice++ 
}


// 2. Escriba  un  programa  que  permita  imprimir  al  revés  cada  uno  de  los  elementos  del  siguiente arreglo: [0, 28, 30, 10, 4].// 

let arreglo2 = [0, 28, 30, 10, 4]; 
console.log(arreglo2);
arreglo2.reverse();
console.log(arreglo2); 

// 3. Escriba un programa que permita calcular la suma de todos los elementos del siguiente arreglo: [1, 3, 6, 82, 23]//

let arreglo3 = [1, 3, 6, 82, 23];
console.table(arreglo3);

let suma = arreglo3.reduce((x, y)=>)

