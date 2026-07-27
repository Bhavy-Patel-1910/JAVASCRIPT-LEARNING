// 1) localStorage = it is permently store data on your browser. when we will close the browser close the tab but it is not to remove it is permenently store on the browser.

// 2) sessionStorage = this is sore temporarily data on your browser when you close the tab it will delete.

// 3) cookies = this is also store the data and it will save the data on browser's property, it's name is cookies, and this concept for small data ot light data.

// what we learn________________________________________________________________________________________________

//localStorage
//how can we store - setItem
//how can we fetch the data - getItem
// how can we remove - removeItem
// how can we update - setItem

//______________________________________________________________________________________________________________

//1) A) localStorage (for store the value) ______________________________________________________________________________

//localStorage.setItem("key","value")

localStorage.setItem("name","Bhavy");

//______________________________________________________________________________________________________________

//1) B) localStorage (for fetch the value) ______________________________________________________________________________

//localStorage.getItem("key")

let val = localStorage.getItem("name");

//______________________________________________________________________________________________________________

//1) C) localStorage (for remove the value) ______________________________________________________________________________

//localStorage.removeItem("key")

localStorage.removeItem("name");

//______________________________________________________________________________________________________________

//1) D) localStorage (for update the value) ______________________________________________________________________________

//localStorage.setItem("key","value")

localStorage.setItem("name","Bhavy");

localStorage.setItem("name","Bhavy Patel ");
//______________________________________________________________________________________________________________

//1) E) localStorage (for clear the value) ______________________________________________________________________________

//localStorage.clear();

localStorage.clear();

//______________________________________________________________________________________________________________


//--------------------------------------------------------------------------------------------------------------------------


// notice📌 = sessionStore is run on your browser console 


//2) A) sessionStorage (for store the value) ______________________________________________________________________________

//localStorage.setItem("key","value")

//sessionStorage.setItem("name","Bhavy");

//______________________________________________________________________________________________________________

//2) B) sessionStorage (for fetch the value) ______________________________________________________________________________

//sessionStorage.getItem("key")

//let val = sessionStorage.getItem("name");

//______________________________________________________________________________________________________________

//2) C) sessionStorage (for remove the value) ______________________________________________________________________________

//lsessionStorage.removeItem("key")

//sessionStorage.removeItem("name");

//______________________________________________________________________________________________________________

//2) D) sessionStorage (for update the value) ______________________________________________________________________________

//sessionStorage.setItem("key","value")

//sessionStorage.setItem("name","Bhavy");

//sessionStorage.setItem("name","Bhavy Patel ");
//______________________________________________________________________________________________________________

//2) E) sessionStorage (for clear the value) ______________________________________________________________________________

//sessionStorage.clear();

//sessionlStorage.clear();

//______________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------------------------------------------


//3) cookies ______________________________________________________________________________

//browser me chhota data store karne ke liye cookies use hota hai.

//cookies - ~4KB
// localStorage sessionStorage - ~5MB

//cookies me jo bhi data store karoge woh data page reload par automatically server par chala jayega

// is is also run on your brwoser console.


// document.cookie = "age=22"

//document.cookie 

//______________________________________________________________________________________________________________


//______________________________________________________________________________________________________________


// notice 📌 - localStorage me arrays and objects direct save nahi kar sakte isliye ham use string bana kar save karate hai jab local storage se data wapas nikalte hai tab string milta hai. 

// string se use apne natural form me lane ke liye JSON.parse() kar dete hai.

localStorage.setItem("friends", JSON.stringify(["bhavy","bh","avy"]));

let frd = JSON.parse(localStorage.getItem("friends"));

console.log(frd);

//______________________________________________________________________________________________________________


// practice______________________________________________________________________________________________________________

// 1. Get the system preference (returns true if dark mode is enabled on the device)
let systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// 2. Helper function to apply the theme to the body
function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

// 3. Helper function to determine which theme to use
function getTheme() {
    let savedTheme = localStorage.getItem("theme");
    
    // If a theme is saved in localStorage, use it
    if (savedTheme) {
        return savedTheme;
    }
    
    // Otherwise, check the device system preference
    return systemPrefersDark.matches ? "dark" : "light";
}

// 4. Initialize the theme when the page loads
applyTheme(getTheme());

// 5. Listen for changes in the system theme (only updates if user hasn't manually chosen a theme)
systemPrefersDark.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getTheme());
    }
});

// 6. Handle the toggle button click
document.querySelector("#themeBtn").addEventListener("click", () => {
    // Check what the current theme is
    let isDark = document.body.classList.contains("dark");
    
    // Toggle to the opposite theme
    let newTheme = isDark ? "light" : "dark";
    
    // Save choices and update the UI
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

//______________________________________________________________________________________________________________
