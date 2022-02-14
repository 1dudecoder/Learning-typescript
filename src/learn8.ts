//Inheritance and access modifiers

class ikka{    
    public name:string="ashish";  //this is a normal modifier avaialble everywhere
    age:number=24;
    friendname:string="dont know"
    protected  fav:string="every ladki he spot" //this will only availble inside ikka and shivam class
    constructor(frd:string){
        this.friendname=frd;
    }
    tellname(){
        console.log("my name is ashish")
    }
}

class shivam extends ikka {
    name:string="shivam";
    age:number=23;  
    private girlfriend:string = "kanchan";  //this will only be available in shivam class
    constructor(myfrd:string , age:string){
        super("zebruu")
    }       
    tellmyname(){
        console.log("my name is shivam")
    }
}

let classvarible = new shivam("nitin","23");
console.log(classvarible.age)