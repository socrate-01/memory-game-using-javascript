let precedente = -1;
let attente = 0;
let img;
let imgp;
let nombre_click=0;
function clic(n) {
    nombre_click++;
    img = document.querySelector("#img" + n);
    if (img.style.visibility !== "visible")
    setTimeout(() => {
        img.style.visibility = "visible";
    }, 250);//attend 250ms avant d'afficher l'image
    else       
    setTimeout(() => {
        img.style.visibility = "hidden";
    }, 250);//attend 250ms avant d'afficher l'image
    console.log("nombre de click "+nombre_click)
    setTimeout(() => {
   comparateur();
    }, 250);//attend 250ms avant d'afficher l'image
};

function initgame(){
    for (let i = 1; i <= 200; i++) {
        const n1 = Math.ceil(16 * Math.random());
        const n2 = Math.ceil(16 * Math.random());
        let img1 = document.querySelector("#img" + n1);
        let img2 = document.querySelector("#img" + n2);
        let src1 = img1.src;
        let src2 = img2.src;
        img1.src = src2;
        img2.src = src1;
    }
}
function comparateur(){

        let tab = [] ;
    
        for(let i=1 ;i<=16;i++){
            img = document.querySelector("#img" + i);
            if (img.style.visibility == "visible")
            {tab.push(i);
            console.log(img.src)}    
        }
        if(tab.length==16)
        alert("vous avez gagné!\nnombre de tentatives = "+nombre_click)
        if(tab.length%2==0){
            
            for (let i = 0; i < tab.length; i++) {
                let imgi = document.querySelector("#img" + tab[i])
                let trouve=false;
                for (let j = 0; j < tab.length; j++) {
                    if (i!==j) {
                        let imgj= document.querySelector("#img" + tab[j])
                        if (imgi.src==imgj.src) {
                            trouve=true
                            break
                        }
                    }
                    
                }
                if(!trouve)  setTimeout(() => {
                    console.log(i +" "+ tab[i])
                    imgi.style.visibility = "hidden";
                }, 550);//attend 250ms avant de cacher l'image
                
            }
        }
   
    }
