"use strict";
//interface 
//this is like a mixin in saas
//this is only use for object creating fixed data types k sath
let obj = {
    firstname: "nitin",
    lastname: "negi",
    age: 23,
    girlfriend: false,
    tellme: function () {
        return `${this.firstname} ${this.lastname}`;
    }
};
function nitin(arg) {
    console.log("hellow bro");
}
nitin(obj);
