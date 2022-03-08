const img = document.querySelector('#img');
const btnProx = document.querySelector('#btnProximo');
const btnAnte = document.querySelector('#btnAnterior');
var index = 0;

const fotos = ['img/imperial-last-dance.jpg', 'img/Mibr.jpg', 'img/luminosity.jpg', 'img/sk.jpg'];

btnProx.addEventListener("click", function aumentarImg(){
    index++;

    if(index==fotos.length){
        index=0;
    }
    img.src = fotos[index];
});

btnAnte.addEventListener("click", function voltarImg(){
    index--;
    if(index==-1){
        index=fotos.length-1;
    }
    img.src = fotos[index];
});