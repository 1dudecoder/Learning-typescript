"use strict";
//readonly modifiers and statics
//readonly means u can only read that variable onces u initialize it
//static variable means u can only call a variable if u use original name of the class where it has defined
class tarun {
    constructor() {
        this.name = "tarun";
        this.age = 23;
    }
    tellmyname() {
        console.log("my name is tarun");
    }
    static tellfathername() {
        console.log("papa");
    }
}
tarun.sister = "vanshu";
let tn = new tarun();
console.log(tn.age);
// tn.age = 10; //not allowed
// tn.sister //not allowed to call static varibale
console.log(tarun.sister); //CLASS K NAME SE HI MILEGI 
tarun.tellfathername();
