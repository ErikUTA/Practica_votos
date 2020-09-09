const votos = new contarVotos();
const divResultados = document.getElementById('Resultados');
const comentarios = document.getElementById('txt')


function eventListener(){
    document.getElementById('btnFav').addEventListener('click', countFavor);
    document.getElementById('btnNeg').addEventListener('click', countContra);
    document.getElementById('btnAbst').addEventListener('click', countAbst);
    document.getElementById('btnEnd').addEventListener('click', terminarVotos);
}

eventListener();

function countFavor() {
    votos.favor ++
    console.log(votos.favor)
}

function countContra() {
    votos.contra ++
    console.log(votos.contra)
}

function countAbst() {
    votos.abstencion ++
    console.log(votos.abstencion)
}

function terminarVotos(){
    let resultados = votos.mostrarResultados(votos.favor, votos.contra, votos.abstencion)
    divResultados.appendChild(resultados);
}





