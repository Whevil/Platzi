// declaracion de variables globales
let vidasComputadora = 3
let vidasJugador = 3
let spanAtaqueJugador = document.getElementById('ataque-jugador')
let spanAtaqueComputadora = document.getElementById('ataque-computadora')
let resultado 
// funciones del juego 
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let botonMascotaJugador = document.getElementById('boton-mascota')
    let atacarFuego = document.getElementById('boton-fuego')
    let atacarAgua = document.getElementById('boton-agua')
    let atacarTierra = document.getElementById('boton-tierra')
    let ataques = ['fuego', 'agua', 'tierra']
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.style.display = 'none'
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
//logica completada para seleccionar mascota
function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'


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
        sectionSeleccionarAtaque.style.display = 'none'
        sectionSeleccionarMascota.style.display = 'block'
    }
    spanMascotaEnemigo.innerHTML = mascotas[(Math.floor(Math.random()*5))+1]
}
// se implementa parrafo personalziado y se garantizan todas las confirmaciondes de batalla 
function crearMensaje (){
    let sectionMensaje=document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    let sectionMensajeFinal=document.getElementById('mensajes-final')
    let parrafoFinal = document.createElement('p')
    if (vidasComputadora === 0){
        parrafo.innerHTML='tu mascota ataco con '+ spanAtaqueJugador+' y la computadora ataco con '+spanAtaqueComputadora + 'el restultado es ' + resultado
        sectionMensaje.appendChild(parrafo)
        parrafoFinal.innerHTML='GANASTE EL JUEGO MI REY'
        sectionMensajeFinal.appendChild(parrafoFinal)
        let botonReiniciar = document.getElementById('boton-reiniciar')
        botonReiniciar.style.display = 'block'        

    }
    else if( vidasJugador === 0){
        parrafo.innerHTML='tu mascota ataco con '+ spanAtaqueJugador+' y la computadora ataco con '+spanAtaqueComputadora + 'el restultado es ' + resultado
        sectionMensaje.appendChild(parrafo)
        parrafoFinal.innerHTML='PERDISTE EL JUEGO ERES UN FRACASADO Y UN MI3RD4S'
        sectionMensajeFinal.appendChild(parrafoFinal)
        let botonReiniciar = document.getElementById('boton-reiniciar')
        botonReiniciar.style.display = 'block' 
    }
        else{
        parrafo.innerHTML='tu mascota ataco con '+ spanAtaqueJugador+' y la computadora ataco con '+spanAtaqueComputadora + 'el restultado es ' + resultado
        sectionMensaje.appendChild(parrafo)

    }    
}
//logica para generar calculo de batalla completada
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
// funcion para refresh de pagina y reiniciar juego probado
function reiniciarJuego(){
    location.reload()
}
// cargar juego 
window.addEventListener('load', iniciarJuego)

