# README - Sistema de Heróis

Este é um exemplo simples de um sistema de heróis em JavaScript, onde cada herói é representado por um objeto da classe `heroi`. Cada herói possui um nome, idade, tipo e ataque.

## Conteúdo

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Exemplo de Código](#exemplo-de-código)

## Descrição

O código consiste em uma classe `heroi` que representa um herói do jogo. O construtor da classe recebe quatro parâmetros: nome, idade, tipo e ataque do herói. Além disso, a classe possui um método `escrever()` que imprime no console informações sobre o herói, como seu tipo, nome, idade e o ataque que ele realizou.

## Funcionalidades

- Criar instâncias de heróis com diferentes características (nome, idade, tipo e ataque).
- Exibir informações sobre cada herói criado.

## Como Usar

1. Clone este repositório;


2. Navegue até o diretório do projeto;
 
3. Abra o arquivo `index.js` em um editor de texto ou IDE de sua preferência.

4. Execute o código JavaScript em um ambiente que suporte, como um navegador ou um ambiente Node.js.

## Exemplo de Código

```javascript
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


Esse README fornece uma visão geral do código, explicando o que ele faz, como utilizá-lo e inclui um exemplo de código para demonstrar sua funcionalidade.


