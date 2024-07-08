//Variables
let numMax = 100
let numSecreto = Math.floor(Math.random()*numMax)+1;
let numUsuario = 0;
let intento = 1;

console.log(numSecreto);
// let palabraVez = "vez"

while(numSecreto != numUsuario) {
    numUsuario = prompt(`Me indicas un num por favor del 1 al ${numMax}`);

    console.log(numUsuario);

    //Comparación de numeros
    if(numSecreto == numUsuario){
        alert (`Acertaste el numero, el numero es: ${numSecreto}. Lo intentaste en: ${intento} ${intento == 1 ? "vez" : "veces"}`);
    }
    else {
        if(numUsuario > numSecreto){
            alert("El numero secreto menor");
        }
        else{
            alert("El numero secreto es mayor");
        }
        intento++;
        // palabraVez = "veces";
        if(intento > 10){
            alert ("Llegaste al maximo de intentos");
            break;
        }
        // alert(`Numero incorrecto, el numero correcto era: ${numSecreto}`);
    }
}
