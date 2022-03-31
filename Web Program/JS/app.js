getData('GET','https://api.jsonbin.io/b/608d7d2692cb9267d0c8fc72',function(res){
    console.log(res);
    $('#result').html(render(res, 'usersTemplate'));
});

function getData(method,url,callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method,url);
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === 4)
          callback(JSON.parse(this.response));
    };
    xhr.send();
};

function render(data, templateID) {
    var source = $(`#${templateID}`).html();
    var template = Handlebars.compile(source);
    return template(data);
}