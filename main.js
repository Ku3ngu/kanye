// GET "https://api.kanye.rest";

fetch("https://api.kanye.rest")
    .then((resp) => resp.json())
    .then(function(data){
        let a = data;
        console.log(a.quote);
        document.querySelector(".quote").innerHTML = a.quote;
    });

