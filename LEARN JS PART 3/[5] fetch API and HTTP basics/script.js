//1)fetch api - get,post basics___________________________________________________________________________________________________

fetch("https://randomuser.me/api/")
.then((rawdata)=>{
    return rawdata.json();
})
.then((data)=>{
    console.log(data.results[0].name.first);
})
.catch((err)=>{
    console.log(err);
});

// second type se bhi likh sakte hai...

fetch("https://randomuser.me/api/")
.then((rawdata)=> rawdata.json())
.then((data)=> console.log(data.results)); // yes same hai upar wale jaisa hi lekin ham ek line me likhte hai toh curly bracs lagana nahi padata and return bhi nahi karna padata dono ek sath hoo jata hai...

//________________________________________________________________________________________________________________________
