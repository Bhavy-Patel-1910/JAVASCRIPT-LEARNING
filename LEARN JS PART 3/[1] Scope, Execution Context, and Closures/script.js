// 1) Scope_______________________________________________________________________________________________________________

//Scope - apana created variables and functions kaha tak use kar sakte ho woh scope hai....
//Scope - functional scope, global scope and block scope

// functional scope - use only in function.
// global scope - pure code me kahi bhi use hoo sakti hai.
// block scope - {} curly braces me hi use hoo sakti hai.

// agar apaka code kisi bhi braces me nahi hai to apka code global hai.

//________________________________________________________________________________________________________________________


// 2) execution context ________________________________________________________________________________________________________

//js sabase pahele jaise hi apaka function dekhati hai , toh woh sabase pahele exection context banata hai, yeh 1 process hai jo ki 2 different phases me chalta hai, 1) memory phase and 2) execution phase.

// memory phase m valuse store ho jati hai and execution phase usko execute karta hai.

//________________________________________________________________________________________________________________________


// 3) lexical scoping v/s dynamic scoping ______________________________________________________________________________________

// lexical scoping --> app kaha par physically available ho yeh puri tarike se depend karta hai ki aap kya accesss kar paoge.

// dynamic scoping --> aap kaha se call kar rahe ho uspe depend karega ki kya value milegi.

//________________________________________________________________________________________________________________________


// 4) Sclosures_______________________________________________________________________________________________________________

//closures hote hai functions ,  joo ki kisi bhi parent function ke andar ho aur andar wala function return hoo raha hoo , and returning function use kare , parent function ka koi variable.

// fayde or nuksan ---> private variables, global polution kam karta hai.

// EX- 1)

function abcd(){
    let a = 12;
    return function () {
        console.log(a);
    }
}

// EX- 2)

// yeh ek truth hai ki  functions khatam hone par apaka  function and uske variables khatam hoo jate hai, par jab bhi closure banata hai to aapka function aur uske variables ka ek backlink banaya jaata hai aur uska name hota hai [[environment]]

function countForMe(){
    let c = 0;
    return function(){
        c++ ;
        console.log(c);
    }
}

let fnc= countForMe();
fnc();
fnc();
fnc();
fnc();

let fnc2= countForMe();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();

// EX- 3)

function clickLimiter(){
    let click=0;
    return function(){
        click++;
        if(click<5){
            console.log(`click: ${click} times`);
        }else{
            console.error(" LIMIT EXCEEDED, TRY AFTER SOME TIME");
        }
    };

}

let fnc0 = clickLimiter();

fnc0();
fnc0();
fnc0();
fnc0();
fnc0();

// EX- 4)

// toaster

// function createToster(config){
//     return function(notification){
//         let div = document.createElement("div");
//         div.className = `fixed ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10": "bottom-10"}` ;

//         div.textContent =  notification;
//         document.body.appendChild(div);

//         setTimeout(() =>{
//             document.body.removeChild(div);
//         }, config.duration * 1000);
//     };
// }

// let toaster= createToster({
//     positionX:"left",
//     positionY:"bottom",
//     theme:"light",
//     duration:3,
// });

// toaster("this is a dummy notification !");

// EX- 5)


function createToster(configuration){
    return function(str){
        let div = document.createElement("div");
        div.textContent =  str;  
        div.className = `inline-block  ${configuration.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none` ;

        document.querySelector(".parent").appendChild(div);

        if (configuration.positionX !== "left" || positionY !== "top") {
            document.querySelector(".parent").className += `${configuration.positionX === "right" ? "right-5" : "left-5" } ${configuration.positionY === "bottom" ? "bottom-5" : "top-5" }` ;
        }

        setTimeout(() =>{
            document.querySelector(".parent").removeChild(div);
        }, configuration.duration * 1000);
    };
}

let toaster1= createToster({
    positionX:"right",
    positionY:"bottom",
    theme:"light",
    duration:3,
});

toaster1(" Download Done");
setTimeout(()=>{
    toaster1("Bhavy accepted your request");
},2000);

//________________________________________________________________________________________________________________________