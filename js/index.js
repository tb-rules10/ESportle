class Home{
    constructor(json) {
        this.json = json;
    }

    Load() {
        const { json } = this;
    
        this.LoadNav(json["navbar"])
    
        //Write Below//
        this.LoadSlide(json["sliding"])
    
        this.LoadNews(json["promotednews"])
    
        this.LoadWatch(json["watchon"])
    
        this.LoadPlayers1(json["players"])
    
        this.LoadHiglights(json["highlights"])
    
        this.LoadTeam(json["teams"])
    
        this.LoadTweets(json["tweets"])
    
        this.LoadFooter(json["footer"])
    }
    
    LoadSlide(obj) {
        console.log("yoyo")
        let slide = document.createElement("div");
        slide.classList.add("container", "scroll-top");
        let panel = document.createElement("div");
        panel.classList.add("panel");
        panel.style.backgroundImage = obj.img1;
        let panel2 = document.createElement("div");
        panel2.classList.add("panel");
        panel2.style.backgroundImage = obj.img2;
        let panel3 = document.createElement("div");
        panel3.style.backgroundImage = obj.img3;
        panel3.classList.add("panel");
        let href1 = document.createElement("a");
        href1.href = obj.link1;
        let href2 = document.createElement("a");
        href2.href = obj.link2;
        let href3 = document.createElement("a");
        href3.href = obj.link3;
        let br = document.createElement("br");
    
        ////// appending  //////
    
        slide.appendChild(panel);
        slide.appendChild(panel2);
        slide.appendChild(panel3);
        panel.appendChild(href1);
        panel2.appendChild(href2);
        panel3.appendChild(href3);
        document.body.appendChild(slide);
        document.body.appendChild(document.createElement("br"));
    
    
    }
    LoadNews(obj) {
        let hotgames = document.createElement("h2");
        hotgames.innerHTML = obj.head;
        let news = document.createElement("div");
        news.classList.add("game-news");
        let href4 = document.createElement("a");
        href4.href = obj.nlink1;
        let img1 = document.createElement("img");
        img1.classList.add("game-img");
        img1.src = obj.img;
        let content = document.createElement("div");
        content.classList.add("game-content");
        let href5 = document.createElement("a");
        href5.href = obj.nlink2;
        let href5title = document.createElement("h3");
        href5title.innerHTML = obj.title;
        let br2 = document.createElement("br");
        let br3 = document.createElement("br");
        let p1 = document.createElement("p");
        p1.innerHTML = obj.p1;
        let p2 = document.createElement("p");
        p2.innerHTML = obj.p2;
        let br4 = document.createElement("br");
        let br5 = document.createElement("br");
        let br6 = document.createElement("br");
    
        document.body.appendChild(hotgames);
        document.body.appendChild(document.createElement("br"));
        news.appendChild(href4);
        href4.appendChild(img1);
        news.appendChild(content);
        content.appendChild(href5);
        href5.appendChild(href5title);
        content.appendChild(br2);
        content.appendChild(br3);
        content.appendChild(p1);
        content.appendChild(p2);
    
        document.body.appendChild(news);
        document.body.appendChild(br5);
        document.body.appendChild(br6)
    }
    
    LoadWatch(obj) {
    
        let some = document.createElement("div");
        let lb1 = document.createElement("br");
        let h3 = document.createElement("h2");
        h3.innerHTML = obj.head;
        let lb2 = document.createElement("br");
        let watchcont = document.createElement("div");
        let watchcard = document.createElement("div");
        let video = document.createElement("div");
        let iframe1 = document.createElement("iframe");
        iframe1.src = obj.embed;
        let content = document.createElement("div");
        let vsteams = document.createElement("div");
        let ul1 = document.createElement("ul");
        let li1 = document.createElement("li");
        let li1img = document.createElement("img");
        li1img.src = obj.team1pic_1;
        let li2 = document.createElement("li");
        li2.innerHTML = obj.team1_1;
        let lb3 = document.createElement("br");
        let ul2 = document.createElement("ul");
        let li3 = document.createElement("li")
        let li3img = document.createElement("img");
        li3img.src = obj.team2pic_1
        let li4 = document.createElement("li");
        li4.innerHTML = obj.team2_1;
        let score = document.createElement("div");
        let hr = document.createElement("hr");
        let img = document.createElement("img");
        img.src = obj.tv1;
    
        some.classList.add("some-container");
        watchcont.classList.add("watch-cont");
        watchcard.classList.add("watch-card");
        video.classList.add("video");
        content.classList.add("content");
        vsteams.classList.add("vs-teams");
        score.classList.add("score");
        li1img.classList.add("versus-img");
        li3img.classList.add("versus-img");
    
        hr.style.display = 'inline-block';
        hr.style.transform = 'rotate(90deg)';
        hr.style.color = 'red';
        hr.style.width = '12vh';
    
        img.style.height = '5vh';
    
        some.appendChild(lb1);
        some.appendChild(h3);
        some.appendChild(lb2);
        some.appendChild(watchcont);
        watchcont.appendChild(watchcard);
        watchcard.appendChild(video);
        video.appendChild(iframe1);
        watchcard.appendChild(content);
        content.appendChild(vsteams);
        vsteams.appendChild(ul1);
        ul1.appendChild(li1);
        li1.appendChild(li1img);
        ul1.appendChild(li2);
        vsteams.appendChild(lb3);
        vsteams.appendChild(ul2);
        ul2.appendChild(li3);
        li3.appendChild(li3img);
        ul2.appendChild(li4);
        content.appendChild(score);
        score.appendChild(hr);
        score.appendChild(img);
    
        ///watchcard 2/////
        let watchcard2 = document.createElement("div");
        let video2 = document.createElement("div");
        let iframe1_2 = document.createElement("iframe");
        iframe1_2.src = obj.embed_2;
        let content2 = document.createElement("div");
        let vsteams2 = document.createElement("div");
        let ul1_2 = document.createElement("ul");
        let li1_2 = document.createElement("li");
        let li1img2 = document.createElement("img");
        li1img2.src = obj.team1pic_2;
        let li2_2 = document.createElement("li");
        li2_2.innerHTML = obj.team1_2;
        let lb2_2 = document.createElement("br");
        let ul2_2 = document.createElement("ul");
        let li3_2 = document.createElement("li")
        let li3img2 = document.createElement("img");
        li3img2.src = obj.team2pic_2;
        let li4_2 = document.createElement("li");
        li4_2.innerHTML = obj.team2_2;
        let score2 = document.createElement("div");
        let hr2 = document.createElement("hr");
        let img2 = document.createElement("img");
        img2.src = obj.tv2;
    
        watchcard2.classList.add("watch-card");
        video2.classList.add("video");
        content2.classList.add("content");
        vsteams2.classList.add("vs-teams");
        score2.classList.add("score");
        li1img2.classList.add("versus-img");
        li3img2.classList.add("versus-img");
    
        hr2.style.display = 'inline-block';
        hr2.style.transform = 'rotate(90deg)';
        hr2.style.color = 'red';
        hr2.style.width = '12vh';
    
        img2.style.height = '5vh';
    
    
        watchcard2.appendChild(video2);
        video2.appendChild(iframe1_2);
        watchcard2.appendChild(content2);
        content2.appendChild(vsteams2);
        vsteams2.appendChild(ul1_2);
        ul1_2.appendChild(li1_2);
        li1_2.appendChild(li1img2);
        ul1_2.appendChild(li2_2);
        vsteams2.appendChild(lb2_2);
        vsteams2.appendChild(ul2_2);
        ul2_2.appendChild(li3_2);
        li3_2.appendChild(li3img2);
        ul2_2.appendChild(li4_2);
        content2.appendChild(score2);
        score2.appendChild(hr2);
        score2.appendChild(img2);
    
    
    
    
        ///watchcard 3/////
        let watchcard3 = document.createElement("div");
        let video3 = document.createElement("div");
        let iframe1_3 = document.createElement("iframe");
        iframe1_3.src = obj.embed_3;
        let content3 = document.createElement("div");
        let vsteams3 = document.createElement("div");
        let ul1_3 = document.createElement("ul");
        let li1_3 = document.createElement("li");
        let li1img3 = document.createElement("img");
        li1img3.src = obj.team1pic_3;
        let li2_3 = document.createElement("li");
        li2_3.innerHTML = obj.team1_3;
        let lb2_3 = document.createElement("br");
        let ul2_3 = document.createElement("ul");
        let li3_3 = document.createElement("li")
        let li3img3 = document.createElement("img");
        li3img3.src = obj.team2pic_3;
        let li4_3 = document.createElement("li");
        li4_3.innerHTML = obj.team2_3;
        let score3 = document.createElement("div");
        let hr3 = document.createElement("hr");
        let img3 = document.createElement("img");
        img3.src = obj.tv3;
    
        watchcard3.classList.add("watch-card");
        video3.classList.add("video");
        content3.classList.add("content");
        vsteams3.classList.add("vs-teams");
        score3.classList.add("score");
        li1img3.classList.add("versus-img");
        li3img3.classList.add("versus-img");
    
        hr3.style.display = 'inline-block';
        hr3.style.transform = 'rotate(90deg)';
        hr3.style.color = 'red';
        hr3.style.width = '12vh';
    
        img3.style.height = '5vh';
    
    
        watchcard3.appendChild(video3);
        video3.appendChild(iframe1_3);
        watchcard3.appendChild(content3);
        content3.appendChild(vsteams3);
        vsteams3.appendChild(ul1_3);
        ul1_3.appendChild(li1_3);
        li1_3.appendChild(li1img3);
        ul1_3.appendChild(li2_3);
        vsteams3.appendChild(lb2_3);
        vsteams3.appendChild(ul2_3);
        ul2_3.appendChild(li3_3);
        li3_3.appendChild(li3img3);
        ul2_3.appendChild(li4_3);
        content3.appendChild(score3);
        score3.appendChild(hr3);
        score3.appendChild(img3);
    
    
        let lbo1 = document.createElement("br");
        let lbo2 = document.createElement("br");
    
        some.appendChild(lbo1);
        some.appendChild(lbo2);
    
        watchcont.appendChild(watchcard);
        watchcont.appendChild(watchcard2);
        watchcont.appendChild(watchcard3);
    
        document.body.append(some);
    
    }
    
    LoadPlayers1(obj) {
    
        let players = document.createElement("div");
        let plb1 = document.createElement("br");
        let control = document.createElement("div");
        let name = document.createElement("div");
        let ph2 = document.createElement("h2");
        ph2.innerHTML = obj.header;
        let controls = document.createElement("div");
        let arrow1 = document.createElement("img");
        arrow1.src = obj.arrows1;
        let arrow2 = document.createElement("img");
        arrow2.src = obj.arrows2;
        let plb2 = document.createElement("br");
        let playercards = document.createElement("div");
        let card1 = document.createElement("div");
        let dp = document.createElement("div");
        dp.style.backgroundImage = obj.img1;
        let info = document.createElement("div");
        let pa1 = document.createElement("a");
        let h3 = document.createElement("h3");
        h3.innerHTML = obj.name1;
    
        players.classList.add("players");
        control.classList.add("control");
        name.classList.add("name");
        controls.classList.add("controls");
        playercards.classList.add("playercards");
        card1.classList.add("player-card");
        dp.classList.add("dp");
        info.classList.add("information", "effect");
    
        players.appendChild(plb1);
        players.appendChild(control);
        control.appendChild(name);
        name.appendChild(ph2);
        control.appendChild(controls);
        controls.appendChild(arrow1);
        controls.appendChild(arrow2);
        players.appendChild(plb2);
        players.appendChild(playercards);
        playercards.appendChild(card1);
        card1.appendChild(dp);
        card1.appendChild(info);
        info.appendChild(pa1);
        pa1.appendChild(h3);
    
    
        let card1_2 = document.createElement("div");
        let dp2 = document.createElement("div");
        dp2.style.backgroundImage = obj.img2;
        let info2 = document.createElement("div");
        let pa1_2 = document.createElement("a");
        let h3_2 = document.createElement("h3");
        h3_2.innerHTML = obj.name2;
    
        card1_2.classList.add("player-card");
        dp2.classList.add("dp");
        info2.classList.add("information", "effect");
    
        playercards.appendChild(card1_2);
        card1_2.appendChild(dp2);
        card1_2.appendChild(info2);
        info2.appendChild(pa1_2);
        pa1_2.appendChild(h3_2);
    
        let card1_3 = document.createElement("div");
        let dp3 = document.createElement("div");
        dp3.style.backgroundImage = obj.img3;
        let info3 = document.createElement("div");
        let pa1_3 = document.createElement("a");
        let h3_3 = document.createElement("h3");
        h3_3.innerHTML = obj.name3;
    
        card1_3.classList.add("player-card");
        dp3.classList.add("dp");
        info3.classList.add("information", "effect");
    
        playercards.appendChild(card1_3);
        card1_3.appendChild(dp3);
        card1_3.appendChild(info3);
        info3.appendChild(pa1_3);
        pa1_3.appendChild(h3_3);
    
    
        let card1_4 = document.createElement("div");
        let dp4 = document.createElement("div");
        dp4.style.backgroundImage = obj.img4;
        let info4 = document.createElement("div");
        let pa1_4 = document.createElement("a");
        let h3_4 = document.createElement("h3");
        h3_4.innerHTML = obj.name4;
    
        card1_4.classList.add("player-card");
        dp4.classList.add("dp");
        info4.classList.add("information", "effect");
    
        playercards.appendChild(card1_4);
        card1_4.appendChild(dp4);
        card1_4.appendChild(info4);
        info4.appendChild(pa1_4);
        pa1_4.appendChild(h3_4);
    
    
        document.body.append(players);
        document.body.append(document.createElement("br"));
    }
    
    LoadHiglights(obj) {
        console.log("high")
        let highlights = document.createElement("div");
        let hlb1 = document.createElement("br");
        let h2 = document.createElement("h2");
        h2.innerHTML = obj.match;
        let hlb2 = document.createElement("br");
        let highbox = document.createElement("div");
        let highlight = document.createElement("div");
        let hiframe = document.createElement("iframe");
        hiframe.src = obj.link1;
        let p = document.createElement("p");
        p.innerHTML = obj.name1;
    
        highlights.classList.add("highlights");
        highbox.classList.add("highlights-box");
        highlight.classList.add("highlight");
    
    
        highlights.appendChild(hlb1);
        highlights.appendChild(h2);
        highlights.appendChild(hlb2);
        highlights.appendChild(highbox);
        highbox.appendChild(highlight);
        highlight.appendChild(hiframe);
        highlight.appendChild(p);
    
        let highlight2 = document.createElement("div");
        let hiframe2 = document.createElement("iframe");
        hiframe2.src = obj.link2;
        let p2 = document.createElement("p");
        p2.innerHTML = obj.name2;
    
        highlight2.classList.add("highlight");
    
        highbox.appendChild(highlight2);
        highlight2.appendChild(hiframe2);
        highlight2.appendChild(p2);
    
    
        let highlight3 = document.createElement("div");
        let hiframe3 = document.createElement("iframe");
        hiframe3.src = obj.link3;
        let p3 = document.createElement("p");
        p3.innerHTML = obj.name3;
    
        highlight3.classList.add("highlight");
    
        highbox.appendChild(highlight3);
        highlight3.appendChild(hiframe3);
        highlight3.appendChild(p3);
    
    
        let highlight4 = document.createElement("div");
        let hiframe4 = document.createElement("iframe");
        hiframe4.src = obj.link4;
        let p4 = document.createElement("p");
        p4.innerHTML = obj.name4;
    
        highlight4.classList.add("highlight");
    
        highbox.appendChild(highlight4);
        highlight4.appendChild(hiframe4);
        highlight4.appendChild(p4);
    
        document.body.appendChild(highlights);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("br"));
    
    }
    
    LoadTeam(obj) {
        let ifcolor = document.createElement("div");
        let thr = document.createElement("hr");
        let th2 = document.createElement("h2");
        th2.innerHTML = obj.head;
        let tlb1 = document.createElement("br");
        let teambox = document.createElement("div");
        let thref1 = document.createElement("a");
        thref1.src = obj.link1;
        let teams = document.createElement("div");
        let logo = document.createElement("div");
        logo.style.backgroundImage = obj.logo1;
        let tp = document.createElement("p");
        tp.innerHTML = obj.fname1;
        let tbr = document.createElement("br");
        let tb = document.createElement("b");
        tb.innerHTML = obj.lname1;
    
        ifcolor.classList.add("if-color1");
        teambox.classList.add("team-box");
        teams.classList.add("teams", "team1");
        logo.classList.add("logo");
    
        thr.style.marginTop = "2";
    
        ifcolor.appendChild(thr);
        ifcolor.appendChild(th2);
        ifcolor.appendChild(tlb1);
        ifcolor.appendChild(teambox);
        teambox.appendChild(thref1);
        thref1.appendChild(teams);
        teams.appendChild(logo);
        teams.appendChild(tp);
        tp.appendChild(tbr);
        tp.appendChild(tb);
    
    
        let thref2 = document.createElement("a");
        thref2.src = obj.link2;
        let teams2 = document.createElement("div");
        let logo2 = document.createElement("div");
        logo2.style.backgroundImage = obj.logo2;
        let tp2 = document.createElement("p");
        tp2.innerHTML = obj.fname2;
        let tbr2 = document.createElement("br");
        let tb2 = document.createElement("b");
        tb2.innerHTML = obj.lname2;
    
        teams2.classList.add("teams", "team2");
        logo2.classList.add("logo");
    
        thref2.appendChild(teams2);
        teams2.appendChild(logo2);
        teams2.appendChild(tp2);
        tp2.appendChild(tbr2);
        tp2.appendChild(tb2);
    
    
        let thref3 = document.createElement("a");
        thref3.src = obj.link3;
        let teams3 = document.createElement("div");
        let logo3 = document.createElement("div");
        logo3.style.backgroundImage = obj.logo3;
        let tp3 = document.createElement("p");
        tp3.innerHTML = obj.fname3;
        let tbr3 = document.createElement("br");
        let tb3 = document.createElement("b");
        tb3.innerHTML = obj.lname3;
    
        teams3.classList.add("teams", "team3");
        logo3.classList.add("logo");
    
        thref3.appendChild(teams3);
        teams3.appendChild(logo3);
        teams3.appendChild(tp3);
        tp3.appendChild(tbr3);
        tp3.appendChild(tb3);
    
        let thref4 = document.createElement("a");
        thref4.src = obj.link4;
        let teams4 = document.createElement("div");
        let logo4 = document.createElement("div");
        logo4.style.backgroundImage = obj.logo4;
        let tp4 = document.createElement("p");
        tp4.innerHTML = obj.fname4;
        let tbr4 = document.createElement("br");
        let tb4 = document.createElement("b");
        tb4.innerHTML = obj.lname4;
    
        teams4.classList.add("teams", "team4");
        logo4.classList.add("logo");
    
        thref4.appendChild(teams4);
        teams4.appendChild(logo4);
        teams4.appendChild(tp4);
        tp4.appendChild(tbr4);
        tp4.appendChild(tb4);
    
        let thref5 = document.createElement("a");
        thref5.src = obj.link5;
        let teams5 = document.createElement("div");
        let logo5 = document.createElement("div");
        logo5.style.backgroundImage = obj.logo5;
        let tp5 = document.createElement("p");
        tp5.innerHTML = obj.fname5;
        let tbr5 = document.createElement("br");
        let tb5 = document.createElement("b");
        tb5.innerHTML = obj.lname5;
    
        teams5.classList.add("teams", "team5");
        logo5.classList.add("logo");
    
        thref5.appendChild(teams5);
        teams5.appendChild(logo5);
        teams5.appendChild(tp5);
        tp5.appendChild(tbr5);
        tp5.appendChild(tb5);
    
        teambox.appendChild(thref2);
        teambox.appendChild(thref3);
        teambox.appendChild(thref4);
        teambox.appendChild(thref5);
    
        document.body.appendChild(ifcolor);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("hr"));
    }
    
    LoadTweets(obj) {
        let tweetshead = document.createElement("h2");
        tweetshead.innerHTML = obj.head;
        let testmonialcont = document.createElement("div");
        let progbar = document.createElement("div");
        let ql = document.createElement("div");
        let qlimg = document.createElement("img");
        qlimg.src = obj.quotel;
        let qr = document.createElement("div");
        let qrimg = document.createElement("img");
        qrimg.src = obj.quoter;
        let testimonial = document.createElement("p");
        testimonial.innerHTML = obj.desc;
        let user = document.createElement("div");
        let uimg = document.createElement("img");
        uimg.src = obj.userimg;
        let udetails = document.createElement("div");
        let username = document.createElement("h4");
        username.innerHTML = obj.username;
        let role = document.createElement("p");
        role.innerHTML = obj.role;
    
    
        document.body.appendChild(tweetshead);
    
        testmonialcont.classList.add("testimonial-container");
        progbar.classList.add("progress-bar");
        ql.classList.add("fas", "fa-quote-left", "fa-quote");
        qr.classList.add("fas", "fa-quote-right", "fa-quote");
        testimonial.classList.add("testimonial");
        user.classList.add("user");
        uimg.classList.add("user-image");
        udetails.classList.add("user-details");
        username.classList.add("username");
        role.classList.add("role");
    
        ql.style.transform = "rotate(180deg)";
    
        testmonialcont.appendChild(progbar);
        testmonialcont.appendChild(ql);
        ql.appendChild(qlimg);
        testmonialcont.appendChild(qr);
        qr.appendChild(qrimg);
        testmonialcont.appendChild(testimonial);
        testmonialcont.appendChild(user);
        user.appendChild(uimg);
        user.appendChild(udetails);
        udetails.appendChild(username);
        udetails.appendChild(role);
    
        document.body.appendChild(testmonialcont);
    
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
        home.href = "#";
        home.innerText = "Home";
        let news = document.createElement("a");
        news.href = "/news.html";
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
            link.target = "_blank";
            link.innerText = obj["teams"][i].name;
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
        footer.appendChild(p);
        let nav = document.createElement("div");
        nav.classList.add("navigation");
        let home = document.createElement("a");
        home.href = "#";
        home.innerText = "Home";
        let news = document.createElement("a");
        news.href = "/news.html";
        news.innerText = "News  "
        let games = document.createElement("a");
        games.href = "/games.html";
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

    let request = new Request("../json/index.json")
    let response = await fetch(request)
    let json = await response.json()

    const c = new Home(json);
    c.Load();

}