"use strict";
//class in typescript
class cc {
    constructor(param) {
        this.color = "red";
        this.bike = 10;
        this.color = param;
        this.bike = 30;
    }
    popo(params) {
        console.log("myname is" + params);
    }
}
let myclass = new cc("nitin");
console.log(myclass.bike);
console.log(myclass.popo("mesoso"));
