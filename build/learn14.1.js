"use strict";
//u can say it is like a package u can defined any thing inside it like class function variable any thing
//and u can pass 1 namespace class function to another namespace but diffrence is ki namespace ka nam same hona chiye
//jhn bhi implement krogye 
//or jo bhi class define krogye namespace k andr usko export krna jroori hai
//This helps in when our code get so much big so we can divide and seprate code  
/// <reference path = "./learn14.2.ts" />
var example;
(function (example) {
    class nclass extends example.shooes {
        constructor(ename) {
            super(ename);
            this.ename = ename;
        }
        getshoes() {
            console.log("nitin bro");
        }
    }
    example.nclass = nclass;
    function efun() {
        return "abc";
    }
    example.efun = efun;
})(example || (example = {}));
