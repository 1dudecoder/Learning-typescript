"use strict";
var example;
(function (example) {
    class shooes {
        constructor(ename) {
            this.ename = ename;
        }
        nickyshooes() {
            console.log("nitin bro");
        }
    }
    example.shooes = shooes;
})(example || (example = {}));
