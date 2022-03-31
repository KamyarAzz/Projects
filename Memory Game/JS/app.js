var nums = [0,1,2,3,4,5,6,7,8,9,10,11];
var backgrounds = [];
var random = 0;
var win = 0;
var life = 7;

var $card = document.querySelectorAll('.card');
var $btn = document.getElementById('btn');
var $life = document.getElementById("life");
var $victory = document.getElementById("victory");
var $defeat = document.getElementById("defeat");


var old = '';
var changed = '';

buildGame();

function buildGame(){
    life = 7;
    $life.innerHTML = 'Lives Left : ' + life;
    win = 0;
    nums = [0,1,2,3,4,5,6,7,8,9,10,11];
    backgrounds=[];
    $victory.classList.replace('enabled','disabled');
    $defeat.classList.replace('enabled','disabled');

    for(var i=12;i>0;i--){
        random = Math.floor(Math.random() * i);
        backgrounds.push(nums[random]);
        nums.splice(random,1);
    };

    $card.forEach(function(element){
        element.classList.add('back');
        element.classList.remove('cheeseburger','pizza','hotdog','icecream','milkshake','fries','success');
        element.onclick = clickHandler;
    });

    for(var j=0;j<12;j++){
        if(j<2)
            $card[backgrounds[j]].classList.add('cheeseburger');
        if(j<4 && j>=2)
            $card[backgrounds[j]].classList.add('pizza');
        if(j<6 && j>=4)
            $card[backgrounds[j]].classList.add('hotdog');
        if(j<8 && j>=6)
            $card[backgrounds[j]].classList.add('icecream');
        if(j<10 && j>=8)
            $card[backgrounds[j]].classList.add('milkshake');
        else if (j>=10)
            $card[backgrounds[j]].classList.add('fries');
    };
}

function clickHandler(event){
    var clicked = event.target.classList;
    console.log(event.target);
    if(clicked.contains('success')){
        alert("Card already matched!");
    }
    else {
        clicked.remove('back');
        if (old === "")
            old = clicked;
        else if (old){
            changed = clicked;
            checkWinState();
        }
    }
}

function checkWinState(){
    if (old[1] === changed[1]){
        win++;
        old.add('success');
        changed.add('success');
        if(win === 6){
            $victory.classList.replace('disabled','enabled');
            setTimeout(buildGame,5000);
        }
    }
    else{
        rotateCards();
        life--;
        $life.innerHTML = 'Lives Left : ' + life;
        if (life === 0){
            $life.innerHTML = 'Lives Left : 💀';
            $defeat.classList.replace('disabled','enabled');
            setTimeout(buildGame,5000);
        }
    }
    old = "";
    changed = "";
}

function rotateCards(){
    $card.forEach(function(element){
        if(!element.classList.contains('success')){
            setTimeout(function(){
                element.classList.add('back');
            },600);
        }});
}

function stopGame(){
    



}

$btn.onclick = buildGame;