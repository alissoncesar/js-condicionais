// if(2 % 3 == 0){
//     console.log('é verdadeiro');
// } else {
//     console.log('é impar')
// }

function verificarSemaforo(){
    if(semaforo.value == 'verde'){
        console.log("Siga em frente");
    } else if (semaforo.value == 'amarelo'){
        console.log("Reduza a velocidade");
    } else {
        console.log("Pare");
    }
}


function gerarNome(){
    if(dia.value == ""){
        alert("Informe o dia");
        return;
    }

    let nome = "";

    if(dia.value >= 1 && dia.value <= 8){
        nome = "Desenvolvedor(a)"
        console.log("Nome: ", nome);
    }else if(dia.value >= 9 && dia.value <= 18){
        nome = "Programador(a)"
        console.log("Nome: ", nome);
    }else if(dia.value >= 9 && dia.value <= 18){
        nome = "Programador(a)"
        console.log("Nome: ", nome);
}

