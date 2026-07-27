// 1) setTimeout __________________________________________________________________________________________________

setTimeout(function(){
    console.log("Hello!!");
} , 5000);

// it will run after 5 seconds and then it will stop. It will not run again after that.

//___________________________________________________________________________________________________________________

// 2) setInterval __________________________________________________________________________________________________

setInterval(function(){
    console.log("Hello world!!");
} , 5000);

// it will run after 5 seconds and then it will run again after that. It will keep running until we stop it.

//___________________________________________________________________________________________________________________

// 3) clearTimeout __________________________________________________________________________________________________

let tm = setTimeout(function(){
    console.log("hey");
} , 3000)

clearTimeout(tm)

//___________________________________________________________________________________________________________________

// 4) clearInterval __________________________________________________________________________________________________

let nm = setInterval( () =>{
    console.log("hellow");
}, 3000 );

clearInterval(nm);

//___________________________________________________________________________________________________________________

// 5) practice with 9 to 0 countdown __________________________________________________________________________________________________

let count = 10;

let interval = setInterval( function (){
    
    if(count>=1){
            count--;
    console.log(count);
    }else clearInterval(interval)

}, 1000)

//___________________________________________________________________________________________________________________

// 6) practice with download progress __________________________________________________________________________________________________

let plus =  0;
let second = 10;
let progress = document.querySelector(".progress");
let percentage = document.querySelector(".percentage");
let title = document.querySelector(".card-title");

let intv = setInterval(function(){
    if(plus<100){
        plus++;
        progress.style.width = `${plus}%`;
        percentage.textContent = `${plus}%`;
        } else {
            title.textContent = "Download Complete";
            clearInterval(intv);}

},second*1000/100) 
//___________________________________________________________________________________________________________________

// 7) practice with box's display none __________________________________________________________________________________________________

let box = document.querySelector(".main2");

setTimeout(function(){
    box.style.display = "none";

},3000);
//___________________________________________________________________________________________________________________