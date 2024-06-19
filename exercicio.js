function AtorPrincipal (atorPrincipal) {
    this.atorPrincipal = atorPrincipal
}

function FilmeSciFi (genero, nome, diretor, atorPrincipal) {
    this.genero = genero
    this.nome = nome
    this.diretor = diretor

    AtorPrincipal.call(this, atorPrincipal)
}

function FilmeRomance (genero, nome, diretor, atorPrincipal) {
    this.genero = genero
    this.nome = nome
    this.diretor = diretor

    AtorPrincipal.call(this, atorPrincipal)
}

const inception = new FilmeSciFi("SciFi", "Inception", "Christopher Nolan", "Leonardo DiCaprio")
const revolutionaryRoad = new FilmeRomance("Romance", "Revolutionary Road", "Sam Mendes", "Leonardo DiCaprio")
const titanic = new FilmeRomance("Romance", "Titanic", "James Cameron", "Leonardo DiCaprio")


console.log(inception)
console.log(revolutionaryRoad)  
console.log(titanic)    
