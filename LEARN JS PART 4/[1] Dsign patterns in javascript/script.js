//1) module pattern (IIFE)___________________________________________________________________________________________________

//module pattern - module pattern ek design attern hai jisme hum apana code ek self executing function (IIFE) ke andar likhate hai , taki variables aur function private rahe.

//iske andar se ham wahi chize return karte hai joo hame bahar karni hai.

//is pattern ka main fayda hai data hiding (encaptulation) aur clean  structure, taki secure, resuable aur manageble ban sake.

let Bank = ( function (){
    let bankbalance = 12000;

    function checkBalance(){
        console.log(bankbalance);

    }

    function setBalance(val){
        bankbalance = val;
    }

    function withdrow (val){
        if (val <= bankbalance){
            bankbalance -= val;
            console.log(bankbalance)
        }
    }

    return {
        checkBalance,
        setBalance,
        withdrow,
    };

})();

//___________________________________________________________________________________________________________________________


//3) factory function  pattern___________________________________________________________________________________________________

//Ek function banate hoo jo object ctreate karta hai,( factory = object bannane ki machine).

//Factory function pattern ek aisa design patttern hai jisme hum  ek simple function likhte hai jo naye objects banakar return karta hai, bina class yaa new keyword use kiye.

//Is pattern ka main idea hai --> object creation ko ek function ke through control karna.

//Har bar jab tum factory function ko call karte hoo , tumhe ek naya object milta hai jisme apane methods aur ( agar chaho toh ) private daata hoo sakta hai.

// yeh pattern specially usefull hai jab tumhe ek hi type ke bahot saaare objects chahiye, jaise users, products, tasks, etc.

//ex-1)

function createProduct(name,price){
    let stock = 10;
    return{
        name,
        price,
        checkStock(){
            console.log(stock);
        },
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`${qty} piece booked - ${stock} pieces left.`);
            }else{
                console.error(`We only have ${stock} pieces left`);
            };
        },
        refill(qty){
            stock += qty;
            console.log(`refilled the stock - ${stock} pieces now`);
        },
    };
}

let iphone = createProduct("iphone",70000);
iphone.buy(6);

//ex-2)


class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, You have subscribed the channel.`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`You have un-subscribed the channel.`);
    }
    notify(message){
        this.subscribers.forEach((sub)=> sub.update(message));
    }
}

class User {
    constructor (name) {
        this.name = name;
    }
    update(data){
        console.log(`${this.name}, ${data}`);
    }
}

let zoho = new YoutubeChannel();
let user1 = new User("Bhavy");
let user2 = new User("Patel");

zoho.subscribe(user1);
zoho.subscribe(user2);

zoho.notify("new video is live on the channel...");

//___________________________________________________________________________________________________________________________
