// 1 add event listener_______________________________________________________

h1 = document.querySelector("h1");
h1.addEventListener("event name",function(){

});

//_____________________________________________________________________________


// 2 remove event listener_______________________________________________________

let h2 = document.querySelector("h2");

function dblclick (){
    h2.style.color = "purple";
}

h2.addEventListener("dblclick",dblclick);
h2.removeEventListener("dblclick",dblclick)

//_____________________________________________________________________________


// 3 click event listener_______________________________________________________

p = document.querySelector("p");
p.addEventListener("click" , function(){
    p.style.color="blue";
});

//_____________________________________________________________________________


// 4 dblclick event listener_______________________________________________________

p2 = document.getElementById("id2")
p2.addEventListener("dblclick",function(){
    p2.style.color= "green";
})

//_____________________________________________________________________________


// 5 input event listener_______________________________________________________

input5 = document.querySelector("#input5");
input5.addEventListener("input5", function(dets){
    if (dets.data !== null){
        console.log(dets.data);
        }
    }
);

//_____________________________________________________________________________


// 6 change event listener_______________________________________________________

sel = document.querySelector("select");
device = document.querySelector("#device");

sel.addEventListener("change", function(details){
    console.log(details.target.value)
    device.textContent = `6. ${details.target.value} Device Selected`;
});

//_____________________________________________________________________________


// 7 change event listener_______________________________________________________

main2 = document.querySelector("#main2");

window.addEventListener("keydown", function(details){
    if (details.key === " "){
        main2.textContent = "Space";
        //console.log(details.key)
    }else{ main2.textContent = details.key;

    }
});

//_____________________________________________________________________________


// 8 change event listener_______________________________________________________

let btn8 = document.querySelector("#btn8");
let input8 = document.querySelector("#input8");

btn8.addEventListener("click", function(){
    input8.click();
})

input8.addEventListener("change" , function(details) {
    const file = details.target.files[0];
    if(file){
    btn8.textContent = file.name;
    }
});

//_____________________________________________________________________________


// 9 submit event listener_______________________________________________________

let form9 = document.querySelector("#form9");
let inputs = document.querySelectorAll("#input9");
let main = document.querySelector("main9");

form9.addEventListener("submit",function(details){
    details.preventDefault();

let card9 = document.createElement("div");
card9.classList.add("card9");

let profile9 = document.createElement("div");
profile9.classList.add("profile9");

let img = document.createElement("img");
img.setAttribute("src", inputs[0].value);

let h3 = document.createElement("h3");
h3.textContent= inputs[1].value;

let h5 = document.createElement("h5");
h5.textContent = inputs[2].value;

let p = document.createElement("p");
p.textContent =  inputs[3].value;

profile9.appendChild(img);
card9.appendChild(profile9);

card9.appendChild(h3);
card9.appendChild(h5);
card9.appendChild(p);

main9.appendChild(card9);

inputs.forEach(function(inp){
        if (inp.type !== "submit"){
            inp.value ="";
        }
    });
});

//_____________________________________________________________________________


// 10 mouse over and mouse move event listener_______________________________________________________

main10 = document.querySelector("#main10");
main10.addEventListener("mouseover" , function(){
    main10.style.backgroundColor = "green";
});

main10.addEventListener("mouseout" , function(){
    main10.style.backgroundColor = "blue";
});

//_____________________________________________________________________________


// 11 mouse over and mouse move event listener_______________________________________________________


let abcd = document.querySelector("#abcd");
let main11 = document.querySelector("#main11");

abcd.addEventListener("mousemove" , function(details){
    main11.style.top = details.offsetY + "px"; // offsetX and offsetY used for the in when we can trying to move cube in th cirle.
    main11.style.left = details.offsetX + "px"; // and clientX and ClientY used for when we can trying to move our cube in window so it is perfectly use.
});

//_____________________________________________________________________________


// 12 key up event listener_______________________________________________________

main12 = document.querySelector("#main12");
window.addEventListener("keydown", function(details){
if (details.key === "b"){
        main12.style.backgroundColor = "purple";
}    
});

window.addEventListener("keyup" , function(details){
    if(details.key === "b"){
            main12.style.backgroundColor = "pink";
    }
})

//_____________________________________________________________________________


// 13 Event bubbuling _______________________________________________________

// in this senario addEventListener add on the main13 div but bubbling says if inner tags have not any event listener it will reachout upper tag if upper tag has not eventlisner it is also go to upper tag and exicute that's event.

nav13 = document.querySelector("#nav13");
nav13.addEventListener("click" ,function(){
    alert("Clicked");
});

//_____________________________________________________________________________

// 14 Event bubbuling _______________________________________________________

let main14 = document.querySelector("main14");
let ul14 = document.querySelector("#ul14");
ul14.addEventListener("click" , function(details){
    //details.target.classList.add("lt14")
    //details.target.style.textDecoration = "line-through";
    details.target.classList.toggle("lt14")
})

//_____________________________________________________________________________

// 15 Event bubbuling _______________________________________________________

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let button15 = document.querySelector(".button15");

button15.addEventListener("click" , function(){
    console.log("Button clicked")
});

c.addEventListener("click" , function(){
    console.log("C Clicked")
});

b.addEventListener("click" , function(){
    console.log("B Clicked")
});

a.addEventListener("click" , function(){
    console.log("A Clicked")
})

// if in the bubbuling when we click button or any div it if it have a eventlisner so it will be exicute and move to the next div and it's next div has any event listener so it will be exicute but if div has no any event listener so it will be stoped and not to move next div.
// in this 15th number example button has a event listener so it will be exicute and move  to next div and next div has any event listener so it is also exhicutre ..... and then last if html tag has any event listner so it is also exhicute.
// so event bubbling me yahi hote]a hai ki event move hoti hai by default 1 div to other next div.
// event bubbling me event andar se bahar move karta hai.

//_____________________________________________________________________________


// 16 Event capture _______________________________________________________

//when we we clicked any event or we do event raised so that this event  flow run in two phase.

//phase 1: event move to the parents element to event raised element.
//phase 2: event move to the event raised element to parent element.

// and in this senario always 1stly run phase 1.
// but it is by default off so it is not to exhicute directly but we do it's on so always it is give answer like a phase 1 type.

//1st capture phase run after bubbling phase run.

let a16 = document.querySelector(".a16");
let b16 = document.querySelector(".b16");
let c16 = document.querySelector(".c16");
let button16 = document.querySelector(".button16");

button16.addEventListener("click" , function(){
    console.log("Button clicked")
});

c16.addEventListener("click" , function(){
    console.log("C Clicked")
}, true);

b16.addEventListener("click" , function(){
    console.log("B Clicked")
});

a16.addEventListener("click" , function(){
    console.log("A Clicked")
} ,
true
);


//_____________________________________________________________________________


// 17 practice set1 _______________________________________________________

input17 = document.querySelector("#input17");
span = document.querySelector("span");

input17.addEventListener("input" , function(){
    let left = 20 -input17.value.length;
    span.textContent = left;

    if(left<0){
        span.style.color = "red";
    }
    else{
        span.style.color = "white";
    }
})

//_____________________________________________________________________________

// 18 practice set2 _______________________________________________________

//to do list. this is done in 14.

//_____________________________________________________________________________
