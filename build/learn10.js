"use strict";
class person {
    constructor() {
        this.firstname = "nitin";
        this.lastname = "negi";
    }
    tellname() {
        console.log("name is nitin");
    }
    telllastname() {
        console.log("last name is negi");
    }
}
let personobj = new person(); //we can also double check here
personobj.telllastname;
