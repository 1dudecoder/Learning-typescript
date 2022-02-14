// Duck typing
// TypeScript uses the duck-typing method to compare one object 
// with other objects by checking that both objects have the same type matching names or not.
interface family{
    emailid:string,
    phoneno:number
}

function checkducktype(obj1:family, obj2:family):family{
    return{
        emailid:"teacher@gmail.com",
        phoneno:972490734
    }
}

let fobj1:family = {
    emailid:"abc@gmail.com",
    phoneno:823748734
}

let fobj2:family = {
    emailid:"def@gmail.com",
    phoneno:823748733
}

checkducktype(fobj1,fobj2);