// 1) this keyword_______________________________________________________________________________________________________________

//this keyword special keyword hai, kyuki dusare keywords ke value or nature same raheta hai par this keyword ki value and nature badal jata hai woh depend karata hai ki aap usey kaha use karte hoo. 

// 1) this ki value global scope me window hai.
// 2) this ki value function me window hai.
// 3) this ki value object ke method ke andar object hai.
// 4) event handler ke andar bhi this hamesha wohi hota hai jis ke upar event handler os listenerlaga ho.
// 5) class ke andar jo hai this ki value black object hoti hai jab aap usey new keyword ke sath call karte hoo.

// global scope
console.log(this);

//function ke andar
function abcd(){
    console.log(this);
}
abcd();

// method ke andar
let obj = {
    name:"Bhavy",
    age:22,
    sayName : function(){
        console.log(this);
    },
};

// event Handler
document.querySelector("h1").addEventListener("click" , function(){
    console.log((this.style.color = "red"));

});

//class ke andar
class abcd{
    constructor(){
        console.log("heyhey")
        this.a=12;
    }
}
let value = new abcd();

// method ke andar 
let obj2 = {
    name:"Bhavy",
    age:22,
    sayName : function(){
        let defg = () => {
            console.log(this);
        };
        
        defg();
    },
};
obj2.sayName();

//this ki value----------

//global - window
//function - window
// method with es5 fnc(simple function) - object
// mehtod with es6 arrow fnc - window
// es5 function inside es5 method - window
// arrow function inside es5 mehtod - object
// event handler -  Element
// class - balck object


//________________________________________________________________________________________________________________________


//2) call, apply, bind_________________________________________________________________________________________________________

//function ko call karte wakt aap set kar sakte hoo ki this ki value kya hogi 

// ex-1)
let obj3 = {
    name : "bhavy",
    age : 22,

};

function bcd(){
    console.log(this.age);

}
bcd.call(obj3);

// ex-2)
let obj4 = {
    name:"bhavy",
    age : 22
};

function cd( a,b,c,){
    console.log(this,a,b,c);

}
cd.apply(obj4, [1,2,3]);

// ex-3)
let obj5 = {
    name : "bhavy",
    age:22,
};

function d(a,b,c){
    console.log(this,a,b,c);
    
}
let fnc = d.bind(obj5 , 1,2,3);
fnc();

//________________________________________________________________________________________________________________________

