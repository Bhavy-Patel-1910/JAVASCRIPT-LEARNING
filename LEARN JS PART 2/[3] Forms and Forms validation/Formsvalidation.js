//1. form validation __________________________________________________________________________
form1 = document.querySelector("#form1");
name1 = document.querySelector("#name1");

form1.addEventListener("submit" , function(details){
    details.preventDefault();
    
    if(name1.value.length <= 2){
        document.querySelector("#hide1").style.display = "initial";
    }
    else{
        document.querySelector("#hide1").style.display = "none";

    }
});

//________________________________________________________________________________________________

//2. inline form validation  __________________________________________________________________________

// this is in html file.
//________________________________________________________________________________________________
