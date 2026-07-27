//1)sync/async___________________________________________________________________________________________________

//koi bhi code js me line by line chalega aur ye natural pattern bhi hota hai ki code line by line chale, but kabhi kabaar aise cases bhi ate hai life main jaha par aapka code wait karta hai and utni der mai agla code chal jaata hai. 

// sync - aisa code jo line by line chale woh hota hai sinc code.
// async - aisa code jo jab chalne ke liye ready ho jaye tab chale woh hai async code.



//________________________________________________________________________________________________________________________


//2)callback pattern & callback hell___________________________________________________________________________________________________

//callback- ek function ke parameter me ek aur function bhej dete hoo, toh woh parameter wala function callback kahelata hai. 

//________________________________________________________________________________________________________________________


//3)promises___________________________________________________________________________________________________

//promises - aap ek promise banate hoo jo ki do state me se ek state  me jata hai and woh yaa to resolve  hoga yaa to reject hoga ab woh kya hoga woh to time batayega par humain dono ke liye code likhna padta hai.

let pr= new Promise(function (res,rej){
    setTimeout(()=>{
        let rn = Math.floor (Math.random() * 10);
        if (rn > 5) res("resolves with " + rn);
        else rej("rejected with " + rn);
    },3000)
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
});

//________________________________________________________________________________________________________________________

//4)async & await___________________________________________________________________________________________________

//promises - aap ek promise banate hoo jo ki do state me se ek state  me jata hai and woh yaa to resolve  hoga yaa to reject hoga ab woh kya hoga woh to time batayega par humain dono ke liye code likhna padta hai.

let promise= new Promise(function (res,rej){
    setTimeout(()=>{
        let rn = Math.floor (Math.random() * 10);
        if (rn > 5) res("resolves with " + rn);
        else rej("rejected with " + rn);
    },3000)
});

async function abcd(){
    try{
        let val = await promise;
        console.log(val);

    }catch(err){
        console.log(err);
    }
}

abcd();

//________________________________________________________________________________________________________________________
