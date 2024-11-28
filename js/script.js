//Crear una cuenta atrás de 5 segundos que se muestre en pantalla
//generar un número aleatorio que si coincide con el del jugador se salve el mundo
//Boton que reinicie el juego

let contador = document.getElementById('countdown');
let resultado = document.getElementById('result');
const botonReiniciar = document.getElementById('restart');
let numeroJugador = document.getElementById('userInput');
console.log(numeroJugador);

function imprimirCuentaAtras(){ 
    let contadorSegundos = 5;
    let cuentaAtras = setInterval(() => {
        contador.innerHTML = `<p>Quedan ${contadorSegundos} segundos para que estalle la bomba</p>`
        if (contadorSegundos == 0) {
            clearInterval(cuentaAtras);
        }
        contadorSegundos--;
    }, 1000);
}
function tiempoJuego () {
        setTimeout(() => {
            let numeroOrdenador = Math.floor(Math.random()*3)+1;
            let valorJugada = numeroJugador.value;
            if (valorJugada == numeroOrdenador) {
             resultado.innerHTML = `<h2 class="green">ENHORABUENA, HAS SALVADO EL MUNDO 👑</h2>
             <p>¡Has ganado, tu resultado ${valorJugada} es igual al número ${numeroOrdenador} !</p>`;
            } else {
                resultado.textContent = `¡Perdiste, tu resultado ${valorJugada} es diferente al número ${numeroOrdenador}! ☠️`;
            }
        }, 6000);
    }


botonReiniciar.addEventListener('click', ()=>{
    resultado.textContent = "";
    contador.textContent = ""; 
    tiempoJuego();
    imprimirCuentaAtras();
})


numeroJugador.addEventListener('input', ()=>{
    imprimirCuentaAtras();
    tiempoJuego();
})