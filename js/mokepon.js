// declaracion de variables globales
let vidasComputadora = 3
let vidasJugador = 3
let spanAtaqueJugador = document.getElementById('ataque-jugador')
let spanAtaqueComputadora = document.getElementById('ataque-computadora')
let resultado 

// funciones del juego 
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    let atacarFuego = document.getElementById('boton-fuego')
    let atacarAgua = document.getElementById('boton-agua')
    let atacarTierra = document.getElementById('boton-tierra')
    let ataques = ['fuego', 'agua', 'tierra']
    let botonReiniciar = document.getElementById('boton-reiniciar')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    botonReiniciar.addEventListener('click', reiniciarJuego)

    atacarFuego.addEventListener('click', ()=>
    {spanAtaqueJugador = 'fuego';
    spanAtaqueComputadora = ataques[(Math.floor(Math.random()*ataques.length))]
    batalla()
    crearMensaje()
    if (vidasComputadora === 0 || vidasJugador === 0){
        atacarFuego.disabled = true
        atacarAgua.disabled = true
        atacarTierra.disabled = true
    }
    

    })

    atacarAgua.addEventListener('click', ()=>
    {spanAtaqueJugador = 'agua';
    spanAtaqueComputadora = ataques[(Math.floor(Math.random()*ataques.length))]
    batalla()
    crearMensaje()
    if (vidasComputadora === 0 || vidasJugador === 0){
        atacarFuego.disabled = true
        atacarAgua.disabled = true
        atacarTierra.disabled = true
    }

    })

    atacarTierra.addEventListener('click', ()=>
    {spanAtaqueJugador = 'tierra';
    spanAtaqueComputadora = ataques[(Math.floor(Math.random()*ataques.length))]
    batalla()
    crearMensaje()
    if (vidasComputadora === 0 || vidasJugador === 0){
        atacarFuego.disabled = true
        atacarAgua.disabled = true
        atacarTierra.disabled = true
    }
    })
}
function seleccionarMascotaJugador(){
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    let mascotas = [ "hipodoge", "capipepo", "ratigueya", "lagostelvis", "tucapalma", "pydos"]
    if (document.getElementById('hipodoge').checked){
    spanMascotaJugador.innerHTML = 'hipodoge'
    }
    else if (document.getElementById('capipepo').checked){
    spanMascotaJugador.innerHTML = 'capipepo'
    }
    else if  (document.getElementById('ratigueya').checked){
    spanMascotaJugador.innerHTML = 'ratigueya'
    }
    else {
      alert("debesa seleccionar mascota")
    }
    spanMascotaEnemigo.innerHTML = mascotas[(Math.floor(Math.random()*5))+1]
}

function crearMensaje (){
    let sectionMensaje=document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    if (vidasComputadora === 0){
        parrafo.innerHTML='GANASTE'
        sectionMensaje.appendChild(parrafo)

    }
    else if( vidasJugador === 0){
        parrafo.innerHTML='PERDISTE'
        sectionMensaje.appendChild(parrafo)
    }
    else{
        parrafo.innerHTML='tu mascota ataco con '+ spanAtaqueJugador+' y la computadora ataco con '+spanAtaqueComputadora + 'el restultado es ' + resultado
        sectionMensaje.appendChild(parrafo)
    }    
}



function batalla(){

let spanVidasJugador =document.getElementById('vidas-jugador');
let spanVidasComputadora = document.getElementById('vidas-computadora');

if (spanAtaqueJugador == spanAtaqueComputadora){
    resultado = 'EMPATE'
}
    else if ( spanAtaqueJugador == 'agua' && spanAtaqueComputadora == 'fuego' || spanAtaqueJugador == 'fuego' && spanAtaqueComputadora == 'tierra'  || spanAtaqueJugador == 'tierra' && spanAtaqueComputadora == 'agua'){
        resultado = 'VICTORIA'
        vidasComputadora--;
        spanVidasJugador.innerHTML=vidasJugador
        spanVidasComputadora.innerHTML=vidasComputadora
    }
        else{
            resultado = 'DERROTA'
            vidasJugador--;
            spanVidasJugador.innerHTML=vidasJugador
            spanVidasComputadora.innerHTML=vidasComputadora
        }
}

function reiniciarJuego(){
    location.reload()
}


window.addEventListener('load', iniciarJuego)

