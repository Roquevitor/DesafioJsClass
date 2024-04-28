class heroi {
    
    constructor(nome, idade, tipo, atack){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.atack = atack

    }

    escrever() {
        console.log(`O ${this.tipo} ${this.nome}, com ${this.idade} anos, atacou usando ${this.atack}`);

    }

}

let heroiAtaque = new heroi("Akashi", 25,"mago", "magia");
let heroiAtaque1 = new heroi("cleitin", 28,"guerreiro","espada");
let heroiAtaque2 = new heroi("Junior", 15,"monge","artes marciais");
let heroiAtaque3 = new heroi("Hun", 18,"ninja","shuriken");

heroiAtaque.escrever();
heroiAtaque1.escrever();
heroiAtaque2.escrever();
heroiAtaque3.escrever();