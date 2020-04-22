var score, roundscore, activeplayer; 
var gameplay = true;
init();

//Role dice button functioning
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplay){
    var dice = Math.floor(Math.random() * 6) + 1;



    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';

   if(dice!==1){
    roundscore+=dice;
    document.querySelector('#current-'+activeplayer).textContent= roundscore;

   }

   else
   {
     nextplayer();

   }
}
   

});

//Hold button functioning

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplay){
    score[activeplayer] +=roundscore;
    document.querySelector('#score-'+activeplayer).textContent= score[activeplayer];
    if(score[activeplayer]>=30)
    {
       
        document.getElementById('name-'+activeplayer).textContent='Winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        gameplay= false;    
    }
    else
    {
        nextplayer();
    }

}
    

})





function nextplayer(){
    activeplayer===0? activeplayer=1: activeplayer=0;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}

function init(){
    score = [0,0];
roundscore= 0;
activeplayer= 0;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

//initialing the names again

document.querySelector('#name-0').textContent='Player-1';
document.querySelector('#name-1').textContent='Player-2';

//removing the winner class and initializing the active tag

document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}



//New game button functioning


document.querySelector('.btn-new').addEventListener('click',init);


































// activeplayer2=1;

// var dice1= Math.floor(Math.random()*6)+1;
// var dice2= Math.floor(Math.random()*6)+1;

// document.querySelector('#current-'+activeplayer1).textContent= dice1;

// var htmldoc= document.querySelector('#current-'+activeplayer1).textContent;
// console.log(htmldoc);

// document.querySelector('#current-'+activeplayer2).innerHTML='<em>'+dice2+'<em>';

// document.querySelector('#dice-2').style.display='none';
