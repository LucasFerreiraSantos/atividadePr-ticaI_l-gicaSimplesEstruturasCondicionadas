// Exercício I
let idade = 25
paragrafo = document.write('A minha idade é ' + idade + ' anos.' + '<br><br>')

// Exercício II
let valor1 = 20
let valor2 = 20
let resultado = valor1 + valor2
document.write('Soma de Valores: ' + valor1 + ' + ' + valor2 + ' é igual a ' + resultado + '.' + '<br><br>')

// Exercício III
let valorCompra = 149.90
let quantParcelas = 2
let total = valorCompra / quantParcelas
document.write('O valor da compra foi de R$' + valorCompra + '.<br>' + 'Forma de pagamento: ' + quantParcelas + 'x ' + 'de R$' + total + '.<br><br>')

// Exercício IV
let minutos = 120
let segundos = 120 * 60
document.write(`${minutos} minutos equivale à ${segundos} segundos. <br><br>`)

// Exercício V
let aluno = 'Lucas Ferreira'
let nota1 = 9
let nota2 = 7
let nota3 = 10
let media = (nota1 + nota2 + nota3) / 3
document.write(`O aluno ${aluno} ficou com a média de ${media.toFixed(2)}.<br><br>`)

// Exercício VI
let a = 10
let b = 20
a = 20
b = 10
document.write(`O valor da variável A é de ${a} e da B é de ${b}.<br><br>`)

// Exercício VII
let eleitores = 12230
let votosBrancos = 49
let votosNulos = 124
let votosValidos = eleitores - (votosBrancos + votosNulos)
let percentualBrancos = (votosBrancos / eleitores) * 100
let percentualNulos = (votosNulos / eleitores) * 100
let percentualValidos = (votosValidos / eleitores) * 100
document.write(`O município possui um total de ${eleitores} eleitores. Após a apuração das urnas, ${votosBrancos} eleitores votaram em branco, que corresponde a ${percentualBrancos.toFixed(2)}%. ${votosNulos} eleitores votaram nulo, que corresponde a ${percentualNulos.toFixed(2)}%. Por fim, ${votosValidos} eleitores tiveram seus votos validados, que corresponde a ${percentualValidos.toFixed(2)}%.<br><br>`)

// Exercício VIII
let numero1 = 10
let numero2 = 12
    if(numero1 === numero2){
        document.write(`Números iguais.<br><br>`)
    } else if(numero1 > numero2) {
        document.write(`Primeiro é maior.<br><br>`)
    } else {
        document.write(`O segundo é maior.<br><br>`)
    }

// Exercício IX
let macas = 9
    if(macas > 12) {
        let valorMacas = 0.25
        let resultado = macas * valorMacas
        document.write(`Foram compradas mais de 1 dúzia, por isso o valor total é de R$${resultado.toFixed(2)}.<br><br>`)
    } else {
        let valorMacas = 0.30
        let resultado = macas * valorMacas
        document.write(`Foram compradas menos de 1 dúzia. Portanto, o valor total é de R$${resultado.toFixed(2)}.<br><br>`)
    }

// Exercício X
let nomeUsuario = 'Lucas Ferreira'
let idadeUsuário = 25
let anoNascimento = 2023 - idadeUsuário
document.write(`O nome do usuário é ${nomeUsuario}, sua idade é de ${idadeUsuário} anos, com isso, ele nasceu no ano ${anoNascimento}.<br><br>`)

// Exercício XI
let numInteiro = 10
    if(numInteiro % 2 === 0) {
        document.write(`Número de entrada é ${numInteiro}. O número é par!<br><br>`)
    } else {
        document.write(`Número de entrada é ${numInteiro}. O número é ímpar!<br><br>`)
    }

// Exercício XII
let nomeEleitor = 'Lucas Ferreira'
let anoAtual = 2023
let anoNascido = 1998
let idadeEleitor = anoAtual - anoNascido
    if(idadeEleitor >= 16) {
        document.write(`O cidadão ${nomeEleitor} poderá votar neste ano.`)
    } else {
        document.write(`O cidadão ${nomeEleitor}, não poderá votar neste ano.`)
    }