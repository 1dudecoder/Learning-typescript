"use strict";
//void and enum
//if your function dont return any thing then u can say it is a void type
function demoabc() {
    console.log("nitin negi");
}
demoabc();
//enum  => //it like ki apke pass bs 3,4 choice hai apko in mese hi choose krna hai nhi to error ayegi
// this is used for ki apko check krna hai jo value pass hori hai argument mai varibale mai
//wo un gine chune varible mai se hai ki nhi 
var myVehicle;
(function (myVehicle) {
    myVehicle["car"] = "audi";
    myVehicle["bike"] = "r15";
    myVehicle["truck"] = "cyclender wala";
    myVehicle["scooty"] = "pept";
})(myVehicle || (myVehicle = {}));
let vehicletype; //type assign kiya
vehicletype = myVehicle.bike; //ab value assign krdi
function getName(parms) {
    console.log(`${parms}`);
}
getName(myVehicle.car);
