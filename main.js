fetch("https://api.kanye.rest")
    .then((resp) => resp.json())
    .then(function(data){
        let a = data;
        console.log(a.quote);
        document.querySelector(".quote").innerHTML = `${a.quote}<div class = "kanye"> -Kanye West</div>`;
    });

let links = [
    "https://hackernoon.com/",
    "https://news.ycombinator.com/",
    "https://www.publish0x.com/",
    "https://github.com/"
];

let icons = [
    "63-632647_hackernoon-logo-hd-png-download.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png",
    "https://cdn.publish0x.com/prod/fs/cachedimages/1511528284-e0e94b2a5496e63f0fc22a94bd649db499d192bf466e0da535b7deb46ad2d1a9.png",
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png"
];

for (let i in links){
    document.querySelector(".links").innerHTML += `<div><a href = "${links[i]}" target = "_blank"><img src = ${icons[i]} class ="link" /></a></div>`;
}

function search(){
    let srch = document.querySelector(".search").value;
    window.location.href = (`https://duckduckgo.com/?q=${srch}`);
}

function save(){
    let sv = document.querySelector(".notes").value;
    localStorage.setItem('nts', sv);
    sv = localStorage.getItem('nts');
}

document.querySelector(".notes").value = localStorage.getItem('nts');


fetch("https://api.pexels.com/v1/search?query=landscape", {
        headers: {
            Authorization: '563492ad6f917000010000017a7ca9df4843475fb5e67f1054eed59b'
        }
    })
    .then((resp) => resp.json())
    .then(function (data) {
        let a = data;
        let b = a.photos;
        let c = (Math.floor((Math.random() * 15) + 1));
        let bg = (b[c].src.original);

        document.querySelector(".body").setAttribute("background", bg);
    });
