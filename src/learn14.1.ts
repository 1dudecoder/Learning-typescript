//u can say it is like a package u can defined any thing inside it like class function variable any thing
//and u can pass 1 namespace class function to another namespace but diffrence is ki namespace ka nam same hona chiye
//jhn bhi implement krogye 
//or jo bhi class define krogye namespace k andr usko export krna jroori hai
//This helps in when our code get so much big so we can divide and seprate code  

/// <reference path = "./learn14.2.ts" />
namespace example{
    export class nclass extends shooes{
        ename:string;
        constructor(ename:string){
            super(ename)
            this.ename = ename
        }
        getshoes(){
            console.log("nitin bro");
        }
    }

    export function efun(){
        return "abc"
    }
}