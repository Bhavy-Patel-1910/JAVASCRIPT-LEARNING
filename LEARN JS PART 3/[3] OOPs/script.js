//1)(constuctor function) OOPs___________________________________________________________________________________________________

//we learn about to make a factory, means aap ek bar blueprint bana do ki har object kaisa dikhega and hum log naye objects with diffrent values bana payege , yahi thoda bahot upar upar se kam hai oops ka.

// sabase pahele ham function banayenge, and uske andar jab ham ham NEW use karate gau toh woh ek blank object return karta hai and uske baad jab ham this use karate hai toh this ki value function ke andar windos hoti hai par jab ham NEw use karte hai toh woh wahi object ban jata hai.

//yeh ek constructor function hai jaha pe "NEW" use hota hai us function ko Constructor function kahete hai or usme Function ka name likho toh usme function ka name Capital letter se shuru hota hai.


function CreatePencil(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1); // pencil1.write("hey")---> console pe yeh likhoge tab answer milega
    }
}

let pencil1 = new CreatePencil("Nataraj", 10, "black", "Nataraj");
let pencil2 = new CreatePencil("Doms", 10, "purple", "Doms");

//________________________________________________________________________________________________________________________

//2) prototype___________________________________________________________________________________________________

//agar tumhare constructor function koi field apane prototype par attach karle toh us constructor se banane wali sabhi new instances means objects, ke pass woh field autometically  chali jati hai.

//ex-1)
function CreateEraser(name,price,color){
    this.name = name;
    this.price = price;
    this.color = color;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1); // pencil1.write("hey")---> console pe yeh likhoge tab answer milega
    }
}

CreateEraser.prototype.company = "doms";

let earaser2 = new CreateEraser("Doms", 10, "purple");
let earaser1 = new CreateEraser("Nataraj", 10, "black");


//ex-2)

function CreatePencil(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    
}

CreatePencil.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1); // pencil3.write("hey")---> console pe yeh likhoge tab answer milega
    };

let pencil3 = new CreatePencil("Nataraj", 10, "blue", "Nataraj");
let pencil4 = new CreatePencil("Doms", 10, "green", "Doms");


//________________________________________________________________________________________________________________________

//3)Methods class___________________________________________________________________________________________________

//ex-1)

class CreateShrpner{
    constructor(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;

    }
    
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1); // pencil1.write("hey")---> console pe yeh likhoge tab answer milega
    }
}

let s1 = new CreateShrpner("Nataraj", 10, "orange", "Nataraj");
let s2 = new CreateShrpner("Doms", 10, "pink", "Doms");

//ex-2)

class CreatePen{
    constructor(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;

    }
    
    erase(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.style.color === this.color){
                elem.remove();
            }
        });
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1); // pencil1.write("hey")---> console pe yeh likhoge tab answer milega
    }
}

let p5 = new CreatePen("Nataraj", 10, "orange", "Nataraj");
let p6 = new CreatePen("Doms", 10, "pink", "Doms");

//________________________________________________________________________________________________________________________


//4)Extend & Super___________________________________________________________________________________________________

class User {
    constructor(name,add,username,email){
        this.name = name;
        this.add = add;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole(){
        return`you are a ${this.role}`;
    }

    write (text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);

    }
}
class Admin extends User{                 //extend is use for user ka constructor direct use kar sakte hoo
    constructor(name,add,username,email){
        super(name,add,username,email)    // super joo upar wale ke constructore ke pass chala jata hai means uski value lata hai
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
    }
}



let u1 = new User("BHAVY" , "Sander", "BhavyPatel", "bhavy@gmail.com");
let u2 = new User("Bhavya", "Patan","BHavyaPAtel", "b@b.com");
let a1 = new Admin("ketu", "Patan","ketu", "k@k.com");

//________________________________________________________________________________________________________________________


//5)clasical inheritance & prototypal inheritance ______________________________________________________________________________

//clasical inheritence - java, cpp, js sab me hota hai
//classes banana and unhe extend karna

// inheritence means - class --> class use hota hai

// prototype inheritence - object --> object use hota hai ,  yeh sirf js me hota hai.

// ek object hai aap chaho toh uski saari props/methods ko inherit kara dete hoo dusre object me.

let tea = {
    color : "brown",
    drink : function(){
        console.log("gut gut gut")
    }
};

let tea2 = Object.create(tea); //Object.create joo bhi object pass karte hoo toh uske prototype ko iske prototype se jod deta hai.
console.log(tea2);
tea2.taste = "mast";
tea2.drink();

//________________________________________________________________________________________________________________________
