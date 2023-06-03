let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 100, 150, 210, 260, 300];
let velocidadeCarros = [3, 3.5, 4.2, 5, 4.5, 6];
let comprimentoCarros = 70;
let alturaCarros = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
      xCarros[i]-= velocidadeCarros[i]
  }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 100;
}

