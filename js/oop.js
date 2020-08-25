alert("JS getting loaded!");

const myObj = {
    name: "Joe",
    age:35,
    hobbies: ["Movies", "Pottery"]
};

console.log(`My name is ${myObj.name}. I am ${myObj.age} years old!`);

const secondPersonString = `{
    "name":"Preet",
    "age":29,
    "hobbies":["Deep Sea Fishing","Cycling"]
}`;
console.log(secondPersonString.name);

const secondPersonObj = JSON.parse(secondPersonString);
console.log(secondPersonObj);