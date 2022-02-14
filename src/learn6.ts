//interface 
//this is like a mixin in saas
//this is only use for object creating fixed data types k sath

interface myinter{
    firstname:string,
    lastname:string,
    age:number,
    girlfriend:boolean,
    fav? : string
    tellme:()=>string   //tellme is a function and string is a return type
}

let obj={
    firstname:"nitin",
    lastname:"negi",
    age:23,
    girlfriend:false,
    tellme:function (){
        return `${this.firstname} ${this.lastname}`;
    }
}


function nitin (arg:myinter){
    console.log("hellow bro")
}

nitin(obj)
