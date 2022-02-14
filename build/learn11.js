"use strict";
function checkducktype(obj1, obj2) {
    return {
        emailid: "teacher@gmail.com",
        phoneno: 972490734
    };
}
let fobj1 = {
    emailid: "abc@gmail.com",
    phoneno: 823748734
};
let fobj2 = {
    emailid: "def@gmail.com",
    phoneno: 823748733
};
checkducktype(fobj1, fobj2);
