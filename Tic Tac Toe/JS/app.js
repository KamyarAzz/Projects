var player = (Math.floor(Math.random() * 2)) === 0 ? 'X' : 'O';
var score = {X:0,O:0};
var count = 0 ;

var $scoreX = document.getElementById("scoreX");
var $scoreO = document.getElementById("scoreO");
var $cell = document.querySelectorAll(".cell");

var winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

satrtgame();

function satrtgame(){
    count = 0;
    scores();
    $cell.forEach(function(element,index){
        element.innerHTML = "";
        element.style.color= '#fff';
    });
};

function scores(){
    $scoreX.innerHTML = "Player X Score : " + score.X;
    $scoreO.innerHTML = "Player O Score : " + score.O;
};

function checkwinner(){
    var matched = winStates.find(function(element){
       return element.every(function(i){
          return $cell[i].innerHTML == player;
        });
    });
    if(matched){
        score[player]++;
        colorChange(matched);
        scores();
        setTimeout(satrtgame,1000);
    }
    else if(count===9){
        satrtgame();
    }
};
$cell.forEach(function(element,index){
    element.onclick = function(event){
        if (event.target.innerHTML === ""){
            this.innerHTML = player;
            count++;
            checkwinner();
            player = player === 'X' ? 'O' : 'X';
        }
    };
});

function colorChange(arr){
    for (var i=0;i<arr.length;i++){
        $cell[arr[i]].style.color = "gold";
    }
};

document.getElementById("btn").onclick = function(event){
    score.O = 0;
    score.X = 0;
    satrtgame();
};