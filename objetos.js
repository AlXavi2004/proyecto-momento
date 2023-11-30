"use strict"

function Jugador(nickname, vidas, cartas){
    this.nickname=nickname;
    this.vidas=vidas;
    this.cartas=cartas;

}

let jugadorUno = new Jugador("Juan", 3, 7);
//interactuar html
let labelPUno = document.getElementById("nick-playerUno");
labelPUno.innerHTML = `Nick J1: ${jugadorUno.nickname}`;

let jugadorDos = new Jugador("Carlos", 3, 10);
//interactuar html
let labelPDos = document.getElementById("nick-playerDos");
labelPDos.innerHTML = `Nick J2: ${jugadorDos.nickname}`;