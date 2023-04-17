class News {

    constructor(json) {
        this.json = json;
    }


    Load() {

        const { json } = this;

        this.LoadNav(json["navbar"])

        //Write Below//

        this.LoadNews(json["3"])

        this.LoadFooter(json["footer"])

    }


    ////////Add Here///////


    LoadNews(obj) {
        // console.log(obj)
        let newsbox = document.createElement("div");
        newsbox.appendChild(document.createElement("br"));
        newsbox.classList.add("news-box");
        let newscont = document.createElement("div");
        newscont.classList.add("newsBYid");
        let h1 = document.createElement("h1");
        h1.classList.add("news-head")
        h1.innerHTML = obj.title;
        newscont.appendChild(h1);
        newsbox.appendChild(newscont);
        newsbox.appendChild(document.createElement("br"));

        let img = document.createElement("img");
        img.src = obj.image;
        img.classList.add("head-img");
        newsbox.appendChild(img);
        newsbox.appendChild(document.createElement("br"));
        newsbox.appendChild(document.createElement("br"));

        let p1 = document.createElement("p");
        p1.innerText = obj.p1;
        newsbox.appendChild(p1);
        newsbox.appendChild(document.createElement("br"));

        let p2 = document.createElement("p");
        p2.innerText = obj.p2;
        newsbox.appendChild(p2);
        newsbox.appendChild(document.createElement("br"));

        let img1 = document.createElement("img");
        img1.src = obj.img2;
        img1.classList.add("news-img");
        newsbox.appendChild(img1);
        newsbox.appendChild(document.createElement("br"));
        newsbox.appendChild(document.createElement("br"));

        let p3 = document.createElement("p");
        p3.innerText = obj.content;
        newsbox.appendChild(p3);

        let btn = document.createElement("a");
        btn.href = "/news.html";
        let ibtn = document.createElement("button");
        btn.appendChild(ibtn);
        ibtn.style.margin = "8vh auto";
        ibtn.classList.add("btn41-43", "btn-42")
        ibtn.innerText = "Previous Page"

        newsbox.appendChild(btn);

        document.body.appendChild(newsbox);

    }




    ///////////////////////


    LoadNav(obj) {
        let nav = document.createElement("div");
        nav.classList.add("game-nav");
        nav.classList.add("navbar");
        nav.id = "navbar";
        nav.classList.add("gradient");
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
        home.href = "/index.html";
        home.innerText = "Home";
        let news = document.createElement("a");
        news.href = "#";
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
        games.href = "/games.html";
        games.innerText = "Games"
        mid.appendChild(games);
        ////////
        let search = document.createElement("div");
        search.classList.add("search-container");
        let form = document.createElement("form");
        form.action = "/search";
        form.method = "get";
        let input = document.createElement("input");
        input.classList.add("search");
        input.classList.add("expandright");
        input.id = "searchright";
        input.type = "search";
        input.name = "q";
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
        signa.href = "/login.html";
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
        p.style.color = "white";
        footer.appendChild(p);
        let nav = document.createElement("div");
        nav.classList.add("navigation");
        let home = document.createElement("a");
        home.href = "/index.html";
        home.innerText = "Home";
        home.style.color = "white";
        let news = document.createElement("a");
        news.href = "#";
        news.innerText = "News"
        news.style.color = "white";
        let games = document.createElement("a");
        games.href = "/games.html";
        games.innerText = "Games";
        games.style.color = "white";
        nav.appendChild(home);
        nav.appendChild(news);
        nav.appendChild(games);
        footer.appendChild(nav);
        let end = document.createElement("end")
        end.style.color = "white";
        let hr = document.createElement("hr");
        hr.style.marginBottom = "5vh";
        end.innerText = obj.end;
        footer.appendChild(end);
        document.body.appendChild(footer);
    }
}



Start()

async function Start() {

    let request = new Request("../json/news1.json")
    let response = await fetch(request)
    let json = await response.json()


    const c = new News(json);
    c.Load();
}
