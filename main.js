const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: '2020',
    anoFabricacao: '2019',
    acelerar: function() {
        console.log('vrumm')
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: '2021',
    anoFabricacao: '2020',
    acelerar: function() {
        console.log('vrumm')
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante,
    this.anoModelo = anoModelo,
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log("acelerar")
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2)
console.log(carroDaMaria2)

const nome = "Gabriel"
const idade = 23
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade, 
    conhecimentos: conhecimentos
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome')

pessoa.sobrenome = null

Object.freeze(pessoa)

pessoa.nome = 'Joao'
console.log(pessoa.nome)

if (pessoa['sobrenome']) {
    console.log('A pessoa tem um sobrenome')
}

if ('sobrenome' in pessoa) {
    console.log('Tem sobrenome')
}
console.log(pessoa.nome)

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
