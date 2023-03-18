

/* Muestro el menu de opciones */

var opciones = parseInt(prompt(
    `Ingrese una de las siguientes opciones
    1. Sumar dos numeros
    2. Restar dos números
    3. Multiplicar dos números
    4. Dividir dos números
    5. Tabla de multiplicar de un número
    6. Salir`
));
/* Si el usuario elige 6, termina el programa */
if (opciones === 6) {
    alert('Programa finalizado');
    document.write(`<h1>Programa finalizado</h1>`);
    throw new Error('');
}

/* Declara las variables a utilizar */
var numero1;
var numero2;
var resultado;

/* Creo el condicional while */
while (opciones !== 6) {

    /* Si la opcion elegida es menor a 1 o mayor a 7, envia una alerta */
    if (opciones >= 7 || opciones <= 1) {
        alert('Opción invalida, intente nuevamente');
    }
    else {
        /* Si de las opciones validas, se eligio la 5, pide el numero para ver la tabla de multiplicar */
        if (opciones === 5) {
            numero1 = parseInt(prompt('Ingrese un numero para ver su tabla de multiplicar'));
        }
        /* De lo contrario pide dos numeros para hacer las operaciones */
        else {
            numero1 = parseInt(prompt('Ingrese un numero'));
            numero2 = parseInt(prompt('Ingrese un numero'));
        }

        /* Luego entra al switch y realiza las operaciones */
        switch (opciones) {
            case 1:
                resultado = numero1 + numero2;
                alert(`La suma de ${numero1} + ${numero2} es ${resultado}`);
                break;


            case 2:
                resultado = numero1 - numero2;
                alert(`La resta de ${numero1} - ${numero2} es ${resultado}`);
                break;

            case 3:
                resultado = numero1 * numero2;
                alert(`La multiplicación de ${numero1} * ${numero2} es ${resultado}`);
                break;

            case 4:
                resultado = numero1 / numero2;
                alert(`La divisíón de ${numero1} / ${numero2} es ${Math.floor(resultado)}
                Resto: ${numero1 % numero2}`);
                break;

            case 5:
                for (var indice = 1; indice <= 12; indice++) {
                    resultado = numero1 * indice;
                    /* Hay que abrir la consola del navegador para poder ver la tabla */
                    console.log(`${numero1} x ${indice} =  ${resultado}`);
                }
                break;

        }
    }

    /* Este menú es para que una vez realizada una de las operaciones vuelva a preguntar
        si deseamos realizar una nueva operacion  */
    var opciones = parseInt(prompt(
        `Ingrese una de las siguientes opciones
        1. Sumar dos numeros
        2. Restar dos números
        3. Multiplicar dos números
        4. Dividir dos números
        5. Tabla de multiplicar de un número
        6. Salir`
    ));


}

/* Si el usuario una vez realizada una operacion presiona 6, aparece esto y se finaliza la ejecución. */
alert('Programa finalizado');
document.write(`<h1>Programa finalizado</h1>`);
throw new Error('');


