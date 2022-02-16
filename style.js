function insert(num){
    var numero = document.getElementById('resultado').innerHTML // Faz mostrar os números no visor
    document.getElementById('resultado').innerHTML = numero + num // Faz os numeros aparecerem juntos
}

function clean(){
    document.getElementById('resultado').innerHTML = "" // Vai limpar a tela
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) // Apaga número por número
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); // Graças ao evaldo ele gera o resultado
    }
}