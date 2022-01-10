//Regra do negócio: Aquilo que não tem a ver com interfae gráfica  é o modelo do jogo

//1º iniciar variaveis: elas serão responsáveis por gerencias o estado do que acontece no jogo
let tabuleiro = ['', '', '', '', '', '', '', '', '',]//começa todo vazio pois ainda não foram "desviradas"
let vezDoJogador = 0//0 = vez do Player Um, 1 = vez do Player Dois
let gameOver = false


let simbolos = ['o', 'x'];//Se for a vez da jogada do Player Um, coloco o, se for Player Dois, coloco x

let formasDeVitoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],]

//Existem 3 possbildiades pro tabuleiro: o, x ou vazio q representa o quadrado ainda não revelado

//Movimento do Player o qual gera um mudança no tabuleiro
function handleMove(posicao) {

    if (gameOver) {//Poderia por tbm !gameOver

        return//Estou retornando nada, nenhuma ação, pq se acontecer o game over, ou seja, 
        //se game over for TRUE, então o jogo retorna nada e acaba cancelando a leitura do resto da função
    }

    //Pego a posição que quero fazer o movimento e dentro dele coloco o simbolo[o, x] e o 
    //index desse simbolos será 0 ou 1 que é a vezDoJogador

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = simbolos[vezDoJogador];

        gameOver = isWin()

        //agora quero passar a vez pro próximo jogador
        if (gameOver == false) {//so passo pro prox jogador se não houver game over

            //Se vezDoJogador= 0 é verdadeiro, então pega 1 e coloca em vezDoJogador, se não coloca 0
            vezDoJogador = (vezDoJogador == 0) ? 1 : 0;

        }
        return gameOver
    }


}


//Aki tenho q pensar na logica por trás do jogo da velha, como que o jogo acaba, como se sabe qm é o vencedor
function isWin() {


    
    for (let i = 0; i < formasDeVitoria.length; i++) {
        let sequencias = formasDeVitoria[i]//Aki pega as sequências e aplica o i

        //possíveis formas de ganhar no jogo, sequencia de 3 iguais(minuto 07:15 da aula)
        let posicao1 = sequencias[0];
        let posicao2 = sequencias[1];
        let posicao3 = sequencias[2]

        //Agora crio a condição
        if (tabuleiro[posicao1] == tabuleiro[posicao2] && tabuleiro[posicao1] == tabuleiro[posicao3]
            && tabuleiro[posicao1] != '') {//além disso, tem q ser diferente de vazio, pois os 
            //quadrados são inicialemten vazios e o jogo teria fim antes mesmo de começar
            return true;
        }

    }
    return false
}

