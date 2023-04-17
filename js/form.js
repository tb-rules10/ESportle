class User{
    constructor(r, n) {
        this.email = r;
        this.pass = n;
    }
    display() {
        const {email, pass} = this;
        console.log("------------");
        console.log(`Username - ${email}, \nPassword - ${pass}`);
    }
    
    
}

const lform = document.querySelector('#inputform');
lform.addEventListener('submit', login);
var userdata = [];

async function login(e) {
    
    e.preventDefault();
    var data = [];
    for(element of form.elements){
        data.push(element.value);
    }
    data = data.slice(0,2);
    const usr = new User(...data);
    userdata.push(usr);
    usr.display();
    form.reset();
    update(usr);
}

function update(usr){
    h1.innerText = "Welcomme";
    input.placeholder = usr.email;
    input1.placeholder = "******";
    a.innerText = "";
}