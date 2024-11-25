//Crear una cuenta atrás de 5 segundos que se muestre en pantalla
//generar un número aleatorio que si coincide con el del jugador se salve el mundo
//Boton que reinicie el juego

let contador = document.getElementById('countdown');
let resultado = document.getElementById('result');
const botonReiniciar = document.getElementById('restart');
let numeroJugador = document.getElementById('userInput');
let numeroOrdenador = Math.floor(Math.random()*3 + 1);

const promesa1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(numeroOrdenador);
    }, 5000);
});



if (numeroJugador === numeroOrdenador) {
    resultado.textContent = "¡has ganado, has parado la bomba!";
} else {
    resultado.textContent = "Perdiste";
}

botonReiniciar.addEventListener('click', ()=>{

})