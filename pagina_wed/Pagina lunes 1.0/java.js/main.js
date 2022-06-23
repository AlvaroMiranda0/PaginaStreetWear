var imagenes=['img/ca1.jpg','img/ca2.jpg','img/ss.jpg']
cont=0;

function slider(carrusel){
carrusel.addEventListener('click',e=>{
    let atras=carrusel.querySelector('.atras'),
    adelante=carrusel.querySelector('.adelante'),
    img=carrusel.querySelector('img'),
    tgt=e.target;

    if(tgt==atras){
        if(cont>0){
            img.scr=imagenes[cont-1];
            cont--;
        }else{
            img.scr=imagenes[imagenes.length-1]
            cont=imagenes.length-1;
        }

    }else if(tgt == adelante){
            if(cont<imagenes.length-1){
                img.scr=imagenes[cont+1];
                cont++;
            }else{
                img.scr=imagenes[0];
                cont=imagenes.length-1;
            }
    }
})

}

document.addEventListener("DOMContentLoaded",()=>{
    let carrusel=document.querySelector(carrusel);
    slider(carrusel);
});