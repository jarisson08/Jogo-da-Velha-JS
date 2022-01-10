//Essa interface vai fazer o meio de campo entre o modelo do jogo e a View(HTML e CSS)
//Primeira coisa que quero é ser capaz de reagir a algum evento do Usuário(cliques de ação no jogo)


//Quando Documento HTMl for carregado, vai executar esse evento
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")//pego tds elementos com class square
    let novoGame = document.getElementById("resetGame")
    //Pra cada quadrado adiciono evento de click
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
        
    })
    novoGame.addEventListener('click', resetGame)
})

//Quando eu clicar no quadrado vou lançar uma ação no tabuleiro
function handleClick(evento) {

    let quadrado = evento.target.id//esse quadrado representa qual quadrado foi clickado
   //cada quadrado clickado tem id q possui a posição a qual alguem realiza uma jogada

    if (handleMove(quadrado)) {


        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi " + vezDoJogador)
        }, 20)
    };//função do game.js

    atualizaUmQuadrado(quadrado);
}

function atualizaUmQuadrado(x) {
    let quadrado = document.getElementById(x);
    let imagem = tabuleiro[x];
    quadrado.innerHTML = `<div class= ${imagem}></div>`
}


function resetGame(){
    
   tabuleiro.fill('')
   for (let i = 0; i < tabuleiro.length; i++){
    atualizaUmQuadrado(i)
   }
  gameOver= false;
  vezDoJogador= 0;
   
}
