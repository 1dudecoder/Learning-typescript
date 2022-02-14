//INTERFACE AND MULTIPLE INTERFACE WITH CLASS
interface sports{
    firstname:string
    lastname:string
    tellname():any
}
// interface sports2 {   //we can also do this 
interface sports2 extends sports{
    telllastname():any
}

class person implements sports2 {   //we can aslo implements differnt interfaces just seprating it by , comma
    firstname: string = "nitin";
    lastname: string = "negi"
    tellname(){
        console.log("name is nitin")
    }
    telllastname(){
        console.log("last name is negi")
    }
}

let personobj:sports2 = new person();  //we can also double check here
personobj.telllastname
 