let palabras = ['CALEIDOSCOPIO', 'PROGRAMACION', 'IDIOSINCRASIA', 'PIGMENTO', 'PORCELANA', 'HIPOPOTAMO'];
let tablero = document.getElementById('horca').getContext('2d');
let letras = [];
let palabracorrecta = "";
let errores = 9;

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    let palabraSecreta = palabra;
    return palabraSecreta;
}

function dibujarLineas(){
    
}