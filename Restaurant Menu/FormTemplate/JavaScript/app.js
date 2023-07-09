var $btn = document.getElementById("submit-btn");

var fullname = document.getElementById("name");
var number = document.getElementById("number");
var date = document.getElementById("date");
var time = document.getElementById("time");

var $nameError = document.getElementById("name-error");
var $numberError = document.getElementById("number-error");
var $dateError = document.getElementById("date-error");
var $timeError = document.getElementById("time-error");


function SubmitSuccess(){
    alert("Reservation Complete!");
    open("../Menu/index.html");
    // location.replace("../index.html");
}

function check(){
    n=0;
    $nameError.innerHTML="";
    $numberError.innerHTML="";
    $dateError.innerHTML="";
    $timeError.innerHTML="";
    if (fullname.value ==""){
        $nameError.innerHTML="Please enter your name!";
        n++;
    }
    if (number.value ==""){
        $numberError.innerHTML="Please enter your number!";
        n++;
    }
    if (date.value ==""){
        $dateError.innerHTML="Please choose a date!";
        n++;
    }
    if (time.value ==""){
        $timeError.innerHTML="Please choose a time!";
        n++;
    }
    if(n==0){
        SubmitSuccess();
    }
}

$btn.onclick = function(){
    check();
}
