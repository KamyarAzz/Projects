let people = null;
let page = 1;
let $output = document.getElementById('output');
let $page = document.getElementById('page');
let $btn1 = document.getElementById('btn-1');
let $btn2 = document.getElementById('btn-2');

function loadJSON(method, url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            callback(JSON.parse(xhr.response));
        }
    }
    xhr.send();
};

function render(people){
    setTimeout(function(){
        document.getElementById("background").classList.add("hidden");
        document.getElementById("main").classList.remove("hidden");
        $output.innerHTML = "";
        for (let i=0;i<=5;i++){
            $output.innerHTML += `<div class="person"> <img src="${people.data[i].avatar}" alt="avatar"> <p class='m'> ${people.data[i].first_name} ${people.data[i].last_name} </p> </div>`;
            $page.innerHTML = page;
        }
    },1800);
};

$btn1.addEventListener("click",function(){
    if (page === 1){
        return;
    }
        page = 1;
        $btn2.classList.remove("inactive");
        $btn1.classList.add("inactive");
        loadJSON('GET', `https://reqres.in/api/users?page=${page}`, function(response){
            render(response);
        });
});

$btn2.addEventListener("click",function(){
    if (page === 2){
        return;
    }
    page = 2;
    $btn1.classList.remove("inactive");
    $btn2.classList.add("inactive");
    loadJSON('GET', `https://reqres.in/api/users?page=${page}`, function(response){
        render(response);
    });
});

loadJSON('GET', `https://reqres.in/api/users?page=${page}`, function(response){
    render(response);
});

