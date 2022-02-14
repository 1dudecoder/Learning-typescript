//Genric in ts 
//TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types. 

// T k alwa app kuch bhi rkh skte hai T stand for type so its a standand ways
//yo data ayega wohi return hoga hume alg alg datatypes define krne ki jaroort nhi hai
function exgenric<T>(data:T):T{
    return data
}

//we can send any data types
// exgenric("nitin")
exgenric({name:"nitin",age:"23"})

//------------------------------------------------------------------------

//Handling multiple perametter
function getvalue<T,U>(name:T,age:U):U{
    return age;
}

getvalue("nitin",21)


// ------------------------------------------------
//using generic with class
class exp1{
    firstname:string;
    lastname:string;

    constructor(f:string,l:string){
        this.firstname = f;
        this.lastname = l;
    }
}

function myvalue<T extends exp1>(parms:T):T{
    console.log(parms.firstname)
    return parms
}

let myobj = new exp1("nitin","negi");

myvalue(myobj);