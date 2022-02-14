//void and enum
//if your function dont return any thing then u can say it is a void type
function demoabc():void{
    console.log("nitin negi")
}
demoabc();

//enum  => //it like ki apke pass bs 3,4 choice hai apko in mese hi choose krna hai nhi to error ayegi
// this is used for ki apko check krna hai jo value pass hori hai argument mai varibale mai
//wo un gine chune varible mai se hai ki nhi 

enum myVehicle{
    car = "audi",
    bike = "r15",
    truck = "cyclender wala",
    scooty = "pept"
}

let vehicletype:myVehicle;  //type assign kiya
vehicletype = myVehicle.bike;  //ab value assign krdi

function getName(parms:myVehicle){
    console.log(`${parms}`)
}

getName(myVehicle.car)