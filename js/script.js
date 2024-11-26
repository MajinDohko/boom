//Crear una cuenta atrás de 5 segundos que se muestre en pantalla
//generar un número aleatorio que si coincide con el del jugador se salve el mundo
//Boton que reinicie el juego

let contador = document.getElementById('countdown');
let resultado = document.getElementById('result');
const botonReiniciar = document.getElementById('restart');
let numeroJugador = document.getElementById('userInput');
const arrayContador = [5, 4, 3, 2, 1, 0];
console.log(numeroJugador);
//localStorage.getItem('numeroOrdenador');

function tiempoJuego () {
        setTimeout(() => {
            let numeroOrdenador = Math.floor(Math.random()*3 + 1);
            let valorJugada = numeroJugador.value;
            if (valorJugada == numeroOrdenador) {
             resultado.textContent = `¡Has ganado, tu resultado ${valorJugada} es igual al número ${numeroOrdenador} !`;
            } else {
                resultado.textContent = `Perdiste, tu resultado ${valorJugada} es diferente al número ${numeroOrdenador} !`;
            }
        }, 5000);
    }
    tiempoJuego();


botonReiniciar.addEventListener('click', ()=>{
    resultado.textContent = "";
    contador.textContent = ""; 
    tiempoJuego();
})

setInterval(cuentaAtras(), 1000);

function cuentaAtras() {
    
}
    /*arrayContador.forEach(numero => {
        setInterval(() => {
            numero = arrayContador[numero];
            let imprimirNumero = document.createElement('p');
            imprimirNumero.innerText = numero;
            contador.appendChild(imprimirNumero);
            console.log(imprimirNumero);
        }, 1000);
    });*/
    /*for (let i = 0; i < arrayContador.length; i++) {
        const numero = arrayContador[i];
        let imprimirNumero = document.createElement('p');
            imprimirNumero.innerText = numero;
            contador.appendChild(imprimirNumero);
            console.log(imprimirNumero);
    }
}*/
