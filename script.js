let tab=["pierre","feuille","ciseaux"];

let vicJ=0;
let vikb=0;


let Bpierre = document.getElementById('pierre');
let Bfeuille = document.getElementById('feuille');
let Bciseaux = document.getElementById('ciseaux');

function bot(){
    return Math.floor(Math.random() * 3);
}

let joueur=document.getElementById('joueur');
let robot=document.getElementById('robot');
let resultat=document.getElementById('resultat');
let score=document.getElementById('score');


Bpierre.addEventListener('click',()=>{
    // alert("pierre");
   
    let val=bot();
    joueur.textContent="joueur : "+tab[0];
    robot.textContent="robot : "+tab[val];

    if (val==2){
        resultat.textContent="gagnant";
        vicJ++;
    }
    else if(val==0){
        resultat.textContent="execo";
    }
    else {
        resultat.textContent="perdant";
        vikb++;
    }
    score.textContent="score robot: "+vikb+ "score joueur: "+ vicJ;
    
});




Bfeuille.addEventListener('click',()=>{
    // alert("feuille");
    let val=bot();

    joueur.textContent="joueur : "+tab[1];
    robot.textContent="robot : "+tab[val];

    if (val==0){
        resultat.textContent="gagnant";
        vicJ++;
    }
    else if(val==1){
        resultat.textContent="execo";
    }
    else  {
        resultat.textContent="perdant";
        vikb++;
    }

    score.textContent="score robot: "+vikb+ "score joueur: "+ vicJ;
});


Bciseaux.addEventListener('click',()=>{
    // alert("ciseaux");
    let val=bot();
    joueur.textContent="joueur : "+tab[2];
    robot.textContent="robot : "+tab[val];

    if (val==1){
        resultat.textContent="gagnant";
        vicJ++;
    }
    else if(val==2){
        resultat.textContent="execo";
    }
    else  {
        resultat.textContent="perdant";
        vikb++;
    }
    score.textContent="score robot: "+vikb+ ", score joueur: "+ vicJ;
    
});

