class Games {
    constructor(json) {
        this.json = json;
    }

    Load() {

        // let json = require("../json/games.json");
        const { json } = this;

        this.LoadNav(json["navbar"])

        this.LoadBG(json["bg-video"])


        var cards = []
        for (let i = 0; i < Object.getOwnPropertyNames(json["cards"]).length; i++) {
            cards.push(json["cards"][i]);
        }
        this.LoadCards(cards)


        this.LoadFooter(json["footer"])

    }


    LoadNav(obj) {
        let nav = document.createElement("div");
        nav.classList.add("game-nav");
        nav.classList.add("navbar");
        nav.id = "navbar";
        nav.style.background = "transparent";
        ////////
        let logo = document.createElement("div");
        logo.classList.add("logo");
        let a = document.createElement("a");
        a.href = "/index.html";
        let img = document.createElement("img");
        img.src = obj.logo;
        img.classList.add("logoimg");
        a.appendChild(img);
        logo.appendChild(a);
        ////////
        let mid = document.createElement("div");
        mid.classList.add("mid-items");
        let home = document.createElement("a");
        home.href = "/";
        home.innerText = "Home";
        let news = document.createElement("a");
        news.href = "/news";
        news.innerText = "News"
        mid.appendChild(home);
        mid.appendChild(news);
        let teams = document.createElement("div");
        teams.classList.add("dropdown");
        let dropbtn = document.createElement("div");
        dropbtn.innerText = "Teams";
        dropbtn.style.cursor = "pointer";
        dropbtn.style.fontSize = "1.15vw";
        let dropcont = document.createElement("div");
        dropcont.classList.add("dropdown-content");
        for (let i = 0; i < Object.getOwnPropertyNames(obj["teams"]).length; i++) {
            let link = document.createElement("a");
            link.href = obj["teams"][i].link;
            link.innerText = obj["teams"][i].name;
            link.target = "_blank";
            dropcont.appendChild(link);
        }
        teams.appendChild(dropbtn);
        teams.appendChild(dropcont);
        mid.appendChild(teams);

        let games = document.createElement("a");
        games.href = "#";
        games.innerText = "Games"
        mid.appendChild(games);
        ////////
        let search = document.createElement("div");
        search.classList.add("search-container");
        let form = document.createElement("form");
        form.action = "/search";
        form.method = "post";
        let input = document.createElement("input");
        input.classList.add("search");
        input.classList.add("expandright");
        input.id = "searchright";
        input.type = "search";
        input.name = "search";
        input.placeholder = "Search";
        let label = document.createElement("label");
        label.classList.add("button");
        label.classList.add("searchbutton");
        label.htmlFor = "searchright";
        let span = document.createElement("span");
        span.classList.add("mglass");
        span.innerHTML = "&#9906;"
        label.appendChild(span);
        form.appendChild(input);
        form.appendChild(label);
        search.appendChild(form);
        ////////
        let login = document.createElement("div");
        let signa = document.createElement("a");
        signa.href = "/login";
        let simg = document.createElement("img");
        simg.classList.add("signup");
        simg.src = obj.signup;
        signa.appendChild(simg);
        login.appendChild(signa);
        ////////
        nav.appendChild(logo);
        nav.appendChild(mid);
        nav.appendChild(search);
        nav.appendChild(login);
        let head = document.createElement("header");
        head.appendChild(nav);
        document.body.appendChild(head);
    }


    LoadBG(obj) {
        console.log(obj)
        let div = document.createElement("div");
        div.style.marginBottom = "3vh";
        div.classList.add("bg-video");
        let vid = document.createElement("video");
        vid.src = obj.video;
        vid.autoplay = true;
        vid.muted = true;
        vid.loop = true;
        let h1 = document.createElement("h1");
        h1.classList.add("head");
        h1.innerText = "Everything about your FAVOURITE GAME!!";
        let a = document.createElement("a");
        a.href = "#games";
        let arrow = document.createElement("div");
        arrow.classList.add("arrow");
        a.appendChild(arrow);
        div.appendChild(vid);
        div.appendChild(h1);
        div.appendChild(a);
        document.body.appendChild(div);
    }

    LoadCards(cards) {
        let gcont = document.createElement("div");
        gcont.id = "games";
        let h1 = document.createElement("h1");
        h1.innerText = "PROMOTED GAMES";
        let gcards = document.createElement("div");
        gcards.classList.add("game-cards");
        for (let card of cards) {
            console.log(card);
            let gcard = document.createElement("div");
            gcard.classList.add("gcard");
            gcard.style.backgroundImage = card.img;
            let a = document.createElement("a");
            a.target = "_blank";
            a.href = card.link;
            gcard.appendChild(a);
            gcards.appendChild(gcard);

        }
        gcont.appendChild(h1);
        gcont.appendChild(gcards);
        document.body.appendChild(gcont);
    }


    LoadFooter(obj) {
        let footer = document.createElement("div");
        footer.style.background = "#0F0F0F";
        footer.style.marginTop = "8vh";
        footer.classList.add("footer");
        let icons = document.createElement("div");
        icons.classList.add("social-media");
        for (let icon of obj.icons) {
            let a = document.createElement("a");
            a.href = "#";
            let img = document.createElement("img");
            img.src = icon;
            a.appendChild(img);
            icons.appendChild(a);
        }
        footer.appendChild(icons);
        let logo = document.createElement("div");
        logo.classList.add("f-logo");
        let a = document.createElement("a");
        a.href = "/index.html";
        let img = document.createElement("img");
        img.src = obj.logo;
        img.classList.add("logoimg");
        a.appendChild(img);
        logo.appendChild(a);
        footer.appendChild(logo);
        let p = document.createElement("p");
        p.innerText = obj.copyright;
        footer.appendChild(p);
        let nav = document.createElement("div");
        nav.classList.add("navigation");
        let home = document.createElement("a");
        home.href = "/";
        home.innerText = "Home";
        let news = document.createElement("a");
        news.href = "/news";
        news.innerText = "News  "
        let games = document.createElement("a");
        games.href = "#";
        games.innerText = "Games";
        nav.appendChild(home);
        nav.appendChild(news);
        nav.appendChild(games);
        footer.appendChild(nav);
        let end = document.createElement("end")
        let hr = document.createElement("hr");
        hr.style.marginBottom = "5vh";
        end.innerText = obj.end;
        footer.appendChild(end);
        document.body.appendChild(footer);
    }

}

Start()

async function Start() {
    console.log("test");

    let request = new Request("../json/games.json")
    let response = await fetch(request)
    let json = await response.json()


    const c = new Games(json);
    c.Load();

}
