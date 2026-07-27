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


//3. pattern form validation  __________________________________________________________________________

// this is in html file.

//________________________________________________________________________________________________


//4. regex validation  __________________________________________________________________________

let form4= document.querySelector("#form4");
let name4= document.querySelector("#name4");
let email4= document.querySelector("#email4");

form4.addEventListener("submit", function(details){
    details.preventDefault();
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    let ans = regex.test("aa_a");
    console.log(ans);

    const regex1 = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let ans1= regex1.test("bhavy.com");
    console.log(ans1);
})

//________________________________________________________________________________________________

//5. practice (1. form validation , 2. interactive feedback form with errors heighlights)  __________________________________________________________________________

let email5 = document.querySelector("#email5");
let password5 = document.querySelector("#password5");
let form5 = document.querySelector("#form5");
let emailerr5 = document.querySelector("#emailError5");
let passerr5 = document.querySelector("#passwordError5");

form5.addEventListener("submit", function(dets){
    dets.preventDefault();

    emailerr5.textContent = "";
    passerr5.textContent = "";

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    let email5ans = emailRegex.test(email5.value);
    let password5ans = passwordRegex.test(password5.value);

    let isValid = true;

    if (!email5ans){
        emailerr5.textContent= "Email is incorrect";
        emailerr5.style.display= "initial";
        isValid= false;
    }

    if (!password5ans){
        passerr5.textContent= "Password is incorrect";
        passerr5.style.display= "initial";
        isValid= false;
    }

    if (isValid){
        document.querySelector("#resultmsg5").textContent = "Form submitted successfully!";
        
    }
})

//________________________________________________________________________________________________
