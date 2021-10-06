// ---------------------------------------- Exercicio_01_JS_básico-------------------------------------------------

// 1º crie uma função chamada checkSignal que possui um parâmetro e imrpime no console:
    //"x é positivo" se o número for positivo 
    //"x é negativo" se o numero for negativo
    // x deve ser substituido pelo número passado como argumento. 
    // Realizar uma chamada da função checkSignal passando o número -99 e outra com o número 42


function checkSignal(X) {
    

    if (X >= 0){
        console.log(X + " é positivo")
    } else {
        console.log(X + " é negativo")
    }

}

checkSignal(-99)
checkSignal(42)

// 2º Crie uma função chamada double que possui um parametro (que será um numero) e retorna o dobro desse número. Chame essa função para o número 5 e imprima o resultado no console.

function double (X) {

    const result = ( X * 2)

    console.log(result)
}

double (5)


// 3º crie uma função chamada  calculate que possui três parametros. O primeiro é uma string e os outros dois números. A string será uma das seguintes opções: "soma","subtrai", "multiplica", "divide". A função calculate deve retornar o resultado da operação (definida pela string) entre os dois numeros. Exemplo: calculate ("soma", 3,5) deve retornar 8. Após, imprima no console quatro chamadas da função calculate, uma com cada uma das operações e números de sua escolha.

function calculate(operacao, number1, number2) {
    switch (operacao) {
        case "soma": 
            console.log(number1 + number2)

        break;

        case "subtrai": 
            console.log(number1 - number2)

        break;

        case "multiplica": 
            console.log(number1 * number2)

        break;
    
        case "divide": 
            console.log(number1 / number2)

        break;
    
        default: 
            console.log( "Verifique o parametro" )
            break;
    }
}   

calculate("soma", 5, 5)
calculate("subtrai", 25, 15)
calculate("multiplica", 3, 7)
calculate("divide", 10, 2)