"use strict";
const personConst = {
    name: "Mark",
    age: 30,
};
const keys = "name";
// IPerson[keyof IPerson]  
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// string | number
function getProp(obj, key) {
    return obj[key];
}
getProp(personConst, 'age'); //getProp 두번째 파라미터는 'age', 'name' 밖에 못들어간다.
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(personConst, "name", "Jane");
