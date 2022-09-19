let palabras = ['CALEIDOSCOPIO', 'PROGRAMACION', 'IDIOSINCRASIA', 'PIGMENTO', 'PORCELANA', 'HIPOPOTAMO'];
let tablero = document.getElementById('horca').getContext('2d');
let letras = [];
let palabraCorrecta = "";
let errores = 9;
let palabra = escojerPalabraSecreta();

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    console.log(palabra);
    return palabra;
}

function dibujarLineas(){
    tablero.lineWidth = 4;
    tablero.lineCap = "round";
    tablero.lineJoin = "round"; //Redondeo en las lineas
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 500/palabra.length;
    for(let i = 0; i <palabra.length; i++){
        tablero.moveTo(400+(ancho*i), 300);
        tablero.lineTo(450+(ancho*i), 300);
    }
    tablero.stroke();
    tablero.closePath();
}dibujarLineas();