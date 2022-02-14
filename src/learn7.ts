//class in typescript

class cc {
    
    color:string = "red";
    bike:number = 10;

    constructor(param:string){
        this.color = param;
        this.bike = 30;
    }

    popo(params:string) {
        console.log("myname is"+params);
    }

}

let myclass = new cc("nitin");

console.log(myclass.bike);
console.log(myclass.popo("mesoso"));
