"use strict";
//Inheritance and access modifiers
class ikka {
    constructor(frd) {
        this.name = "ashish"; //this is a normal modifier avaialble everywhere
        this.age = 24;
        this.friendname = "dont know";
        this.fav = "every ladki he spot"; //this will only availble inside ikka and shivam class
        this.friendname = frd;
    }
    tellname() {
        console.log("my name is ashish");
    }
}
class shivam extends ikka {
    constructor(myfrd, age) {
        super("zebruu");
        this.name = "shivam";
        this.age = 23;
        this.girlfriend = "kanchan"; //this will only be available in shivam class
    }
    tellmyname() {
        console.log("my name is shivam");
    }
}
let classvarible = new shivam("nitin", "23");
console.log(classvarible.age);
