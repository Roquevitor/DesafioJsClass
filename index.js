// Definição da classe "heroi" para representar os personagens do jogo
class heroi {
    // Construtor da classe, que recebe nome, idade, tipo e ataque do herói
    constructor(nome, idade, tipo, atack) {
        // Atribuição das propriedades recebidas como parâmetros para o objeto
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói (ex: guerreiro, mago, monge, ninja)
        this.atack = atack; // Ataque que o herói realiza
    }

    // Método para exibir informações sobre o herói
    escrever() {
        // Utilização de template literals para compor a mensagem
        console.log(`O ${this.tipo} ${this.nome}, com ${this.idade} anos, atacou usando ${this.atack}`);
    }
}

// Criação de instâncias da classe "heroi" com diferentes características
let heroiAtaque = new heroi("Akashi", 25, "mago", "magia"); // Herói mago
let heroiAtaque1 = new heroi("cleitin", 28, "guerreiro", "espada"); // Herói guerreiro
let heroiAtaque2 = new heroi("Junior", 15, "monge", "artes marciais"); // Herói monge
let heroiAtaque3 = new heroi("Hun", 18, "ninja", "shuriken"); // Herói ninja

// Chamada do método "escrever()" para exibir informações sobre cada herói
heroiAtaque.escrever(); // Exibe informações sobre o herói mago
heroiAtaque1.escrever(); // Exibe informações sobre o herói guerreiro
heroiAtaque2.escrever(); // Exibe informações sobre o herói monge
heroiAtaque3.escrever(); // Exibe informações sobre o herói ninja
