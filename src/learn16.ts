//jese ap ka data type define krte ho app khud ki choice ka data type bna skte ho or usme wohi ana chiye

let abcdname: "car" | "truck" = "car"
abcdname = "truck"
// abcdname = "nitin"   => this is wrong

//like this we can also do this with function 

function examplefun(parms:"car" | "truck"){
    console.log("hellow bro");
}
 
examplefun("car")

