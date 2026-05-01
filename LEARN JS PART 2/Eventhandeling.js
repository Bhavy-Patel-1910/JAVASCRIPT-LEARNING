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
