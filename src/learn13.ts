//abstract class 
//abstract and same like interface but interface mai sb variable function sb abstact hote hai apke unhe define krna hi hota hai jhn bhi app usse implement krte ho
//or abstact mai normal function variable bhi ho skte hai or abstract function bhi 
//agr koi function abstract hoga to uski class abstract mani jayegi
//jo abstract class ko inherit krega usko abstract method ko bhi define krna hoga apne ander
//interface k andr hum multiple inhertance kr skte hai
//you can never create a instance of abstract class
abstract class absclass{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    backname(){
        console.log("jojo negi")
    }
    abstract absfunction():any;
}

class normalclass extends absclass{
    name:string;
    age:number;
    constructor(name:string,age:number){
        super(name)
        this.name = name;
        this.age = age;
    }
    absfunction() {
        console.log("nitin negi is here")
    }
}
let nc = new normalclass("name",23);
console.log(nc.name);
