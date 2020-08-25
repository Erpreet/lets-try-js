

const myObj = {
    name: "Joe",
    age:35,
    hobbies: ["Movies", "Pottery"]
};

console.log(`My name is ${myObj.name}. I am ${myObj.age} years old!`);

console.log(myObj);

const myObjString = JSON.stringify(myObj);
console.log(myObjString);

const secondPersonString = `{
    "name":"Preet",
    "age":29,
    "hobbies":["Deep Sea Fishing","Cycling"]
}`;
console.log(secondPersonString);

const secondPersonObj = JSON.parse(secondPersonString);
console.log(secondPersonObj);

class Person
{
    contructor (name = "", age=0, hobbies=[])
    {
        this.name = name;
        this.age = Number(age);
        this.hobbies = hobbies;
    }

    sayHello()
    {
        const helloP = document.createElement("P");
        helloP.textContent = `Hello there! I am ${this.name},nice to meet you!`;
        document.body.appendChild(helloP);
    }
}

const jane = new Person (
    "Jane",
    34,
    ["Sewing", "Cross-Country Skiing"]
    );

    console.log(jane);
    console.log(jane instanceof Person);

    jane.sayHello();

    const dimitri = new Person(
        "Dimitri",
        41,
        ["Painting", "Driving"]
    );

    console.log(dimitri);

    console.log(`My name is ${dimitri.name}. I am ${dimitri.age} years old`);

    dimitri.sayHello();