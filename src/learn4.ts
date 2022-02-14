//functions in ts 

// for type defining use :
// agr pta nhi hai value milegi ya nhi to ?
function abc():number{
    return 20;
}

//catch krte type bhi apke type dena hoga
let jojo:number = abc();

//arg3 is not conform ki ,milega ki nhi
function rocky(arg:number, arg2:string, arg3? : boolean ): any {
    return "nitin negi"
}

rocky(10,"nitn");