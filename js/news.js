class News {

    constructor(json) {
        this.json = json;
    }


    Load() {

        const { json } = this;

        this.LoadNav(json["navbar"])

        //Write Below//

        this.LoadNwCard(json["newscard"])

        this.LoadNwCont(json["newscont"])

        this.LoadFooter(json["footer"])

    }


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


    LoadNwCard(obj) {
        console.log(obj)
        let div1 = document.createElement("div");
        div1.classList.add("container");
        let div2 = document.createElement("div");
        div2.style.backgroundImage = obj.bgimg_1;
        div2.classList.add("panel", "active");
        let a1 = document.createElement("a");
        a1.href = obj.href1_1;
        a1.classList.add("color-me");
        let h31 = document.createElement("h3");
        let a2 = document.createElement("a");
        a2.innerText = obj.txt_1;
        a2.href = obj.href1_2;
        a2.classList.add("color-me");

        let div3 = document.createElement("div");
        div3.style.backgroundImage = obj.bgimg_2;
        div3.classList.add("panel");
        let a3 = document.createElement("a");
        a3.href = obj.href2_1;
        a3.classList.add("color-me");
        let h32 = document.createElement("h3");
        let a4 = document.createElement("a");
        a4.href = obj.href2_2;
        a4.innerText = obj.txt_2;
        a4.classList.add("color-me");

        let div4 = document.createElement("div");
        div4.style.backgroundImage = obj.bgimg_3;
        div4.classList.add("panel");
        let a5 = document.createElement("a");
        a5.href = obj.href3_1;
        a5.classList.add("color-me");
        let h33 = document.createElement("h3");
        let a6 = document.createElement("a");
        a6.href = obj.href3_2;
        a6.innerText = obj.txt_3;
        a6.classList.add("color-me");

        let div = document.createElement("div");
        div.style.backgroundImage = obj.bgimg_4;
        div.classList.add("panel");
        let a7 = document.createElement("a");
        a7.href = obj.href4_1;
        a7.classList.add("color-me");
        let h3 = document.createElement("h3");
        let a = document.createElement("a");
        a.href = obj.href4_2;
        a.innerText = obj.txt_4;
        a.classList.add("color-me");
        div.appendChild(a);

        div.appendChild(h3);
        div1.appendChild(div2)
        div2.appendChild(a1)
        div2.appendChild(h31)
        h31.appendChild(a2)
        div1.appendChild(div3)
        div3.appendChild(a3)
        div3.appendChild(h32)
        h32.appendChild(a4)
        div1.appendChild(div4)
        div4.appendChild(a5)
        div4.appendChild(h33)
        h33.appendChild(a6)
        div1.appendChild(div)
        div.appendChild(a7)
        div.appendChild(h3)
        h3.appendChild(a)

        document.body.appendChild(div1);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("br"));



    }

    LoadNwCont(obj) {
        console.log(obj)
        let div5 = document.createElement("div");
        div5.classList.add("news-cont");
        let h1 = document.createElement("h1");
        h1.innerText = obj.txt_h1;
        div5.appendChild(h1)
        let h3 = document.createElement("h3");
        h3.innerText = obj.txt_h3;
        div5.appendChild(h3)

        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        li1.classList.add("newslist");
        li1.style.border = "1px solid white";
        let img1 = document.createElement("img");
        img1.src = obj.img_link1;
        li1.appendChild(img1);
        let div6 = document.createElement("div");
        div6.classList.add("news-section");
        let a7 = document.createElement("a");
        let h21 = document.createElement("h2");
        h21.innerText = obj.li_1;
        div6.appendChild(a7);
        a7.appendChild(h21);
        li1.appendChild(div6);
        let p1 = document.createElement("p");
        p1.innerText = obj.p_1;
        let a8 = document.createElement("a");
        a8.style.color = "blue";
        a8.innerText = obj.p_2;
        p1.appendChild(a8);
        div6.appendChild(p1);

        let li2 = document.createElement("li");
        li2.classList.add("newslist");
        li2.style.border = "1px solid black";
        let div7 = document.createElement("div");
        div7.classList.add("news-section");
        let a9 = document.createElement("a");
        let h22 = document.createElement("h2");
        h22.innerText = obj.li_2;
        div7.appendChild(a9);
        a9.appendChild(h22);
        li2.appendChild(div7);
        let p2 = document.createElement("p");
        p2.innerText = obj.p_3;
        let a0 = document.createElement("a");
        a0.style.color = "blue";
        a0.innerText = obj.p_4;
        li2.appendChild(a0)
        p2.appendChild(a0);
        div7.appendChild(p2);
        let img2 = document.createElement("img");
        img2.src = obj.img_link2;
        li2.appendChild(img2);

        let li3 = document.createElement("li");
        li3.classList.add("newslist");
        li3.style.border = "1px solid white";
        let img3 = document.createElement("img");
        img3.src = obj.img_link3;
        li3.appendChild(img3);
        let div8 = document.createElement("div");
        div8.classList.add("news-section");
        let a11 = document.createElement("a");
        let h25 = document.createElement("h2");
        h25.innerText = obj.li_3;
        a11.appendChild(h25);
        li3.appendChild(div8);
        div8.appendChild(h25)
        let p3 = document.createElement("p");
        p3.innerText = obj.p_5;
        let a12 = document.createElement("a");
        a12.style.color = "blue";
        a12.innerText = obj.p_6;
        p3.appendChild(a12);
        div8.appendChild(p3);

        let li4 = document.createElement("li");
        li4.classList.add("newslist");
        li4.style.border = "1px solid black";
        let div0 = document.createElement("div");
        div0.classList.add("news-section");
        let a13 = document.createElement("a");
        a13.href = obj.a1;
        let h23 = document.createElement("h2");
        h23.innerText = obj.li_4;
        div0.appendChild(a13);
        a13.appendChild(h23);
        li4.appendChild(div0);
        let p4 = document.createElement("p");
        p4.innerText = obj.p_7;
        let a15 = document.createElement("a");
        a13.href = obj.a1;
        a15.style.color = "blue";
        a15.innerText = obj.p_8;
        li4.appendChild(a15)
        p4.appendChild(a15);
        div0.appendChild(p4);
        let img4 = document.createElement("img");
        img4.src = obj.img_link4;
        li4.appendChild(img4);

        let li = document.createElement("li");
        li.classList.add("newslist");
        li.style.border = "1px solid white";
        let img = document.createElement("img");
        img.src = obj.img_link5;
        li.appendChild(img);
        let div = document.createElement("div");
        div.classList.add("news-section");
        let a16 = document.createElement("a");
        let h2 = document.createElement("h2");
        h2.innerText = obj.li_5;
        div.appendChild(a16);
        a16.appendChild(h2);
        li.appendChild(div);
        let p = document.createElement("p");
        p.innerText = obj.p_9;
        let a = document.createElement("a");
        a.style.color = "blue";
        a.innerText = obj.p_0;
        p.appendChild(a);
        div.appendChild(p);

        document.body.appendChild(div5);
        div5.appendChild(li1)
        div5.appendChild(li2)
        div5.appendChild(li3)
        div5.appendChild(li4)
        div5.appendChild(li)




        let btn = document.createElement("Button");
        btn.style.margin = "8vh auto";
        btn.classList.add("more", "btn41-43", "btn-42");
        btn.innerText = "Load More";
        document.body.appendChild(btn);

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

    let request = new Request("../json/news.json")
    let response = await fetch(request)
    let json = await response.json()


    const c = new News(json);
    c.Load();
}
