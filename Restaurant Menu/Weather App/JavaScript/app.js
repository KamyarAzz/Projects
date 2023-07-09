var $searchBox = document.getElementById("search-box");
$searchBox.addEventListener("keypress",setQuery);

var cityName = "";
var myip = "";

var weather = {
    key : "2f22747297bb189f5bea91e28f464efc",
    baseURL : "https://api.openweathermap.org/data/2.5/weather"
};

var IPadd = {
    key :"b5cbfbcce3ce4254bc262b9c7d043f1b",
    baseURL : "https://api.ipgeolocation.io/ipgeo"
};

getIP('GET',`${IPadd.baseURL}?apiKey=${IPadd.key}`,showIP);

function setQuery(event){
    if(event.keyCode === 13){
        cityName =  this.value;
        getData('GET',`${weather.baseURL}?q=${cityName}&units=metric&appid=${weather.key}`,displayData);
    }
};

function getData(method,url,callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method,url);
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === 4)
          callback(JSON.parse(this.response));
    };
    xhr.send();
};

function getIP(method,url,callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method,url);
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === 4)
        callback(JSON.parse(this.response));
    };
    xhr.send();
};

function showIP(IPobj){
    myip = IPobj.ip;
    var mycity = IPobj.city;
    document.getElementById("search-box").value = mycity;
    console.log("your IP : " + myip);
};

function buildDate(){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var daily = new Date();
    return `${days[daily.getDay()]} ${daily.getDate()} ${months[daily.getMonth()]} ${daily.getFullYear()}`;
};

function displayData(data){
    document.querySelector(".location .city").innerHTML = `${data.name}, ${data.sys.country}`;
    document.querySelector(".location .date").innerHTML = buildDate();
    document.querySelector(".weather-info .temp").innerHTML = `${data.main.temp}°C`;
    document.querySelector(".weather-info .weather").innerHTML = `${data.weather[0].main}`;
    document.querySelector(".weather-info .high-low").innerHTML = `${data.main.temp_min}°C | ${data.main.temp_max}°C`;
    document.querySelector("main").classList.remove("show");
    setInterval(function(){
        document.querySelector("main").classList.add("show");
    },0.4);
};

document.getElementById("bird").onclick = function(){
    alert("Your IP is : " + myip);
};
