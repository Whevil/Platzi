
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

}

function seleccionarMascotaJugador(){
    
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    let mascotas = [ "hipodoge", "capipepo", "ratigueya", "lagostelvis", "tucapalma", "pydos"]

    if (document.getElementById('hipodoge').checked){
    //alert('mascota seleccionada hipodogue')
    spanMascotaJugador.innerHTML = 'hipodoge'
    }
    else if (document.getElementById('capipepo').checked){
    //alert('mascota seleccionada capipepo')
    spanMascotaJugador.innerHTML = 'capipepo'
    }
    else if  (document.getElementById('ratigueya').checked){
    //alert('mascota seleccionada ratigueya')
    spanMascotaJugador.innerHTML = 'ratigueya'
    }
    /*
    else if  (document.getElementById('lagostelvis').checked){
    //alert('mascota seleccionada lagostelvis')
    spanMascotaJugador.innerHTML ='lagostelvis'    
    }
    else if  (document.getElementById('pydos').checked){
    //alert('mascota seleccionada pydos')
    spanMascotaJugador.innerHTML= 'pydos'
    }
    */
    else {
      alert("debesa seleccionar mascota")
    }
    spanMascotaEnemigo.innerHTML = mascotas[(Math.floor(Math.random()*5))+1]
}



window.addEventListener('load', iniciarJuego)

