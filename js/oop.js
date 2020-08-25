

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

    birthday()
    {
        this.age++;

        const bDayH2 = document.createElement('H2');
        bDayH2.textContent = "Birthday Detected!";
        document.body.appendChild(bDayH2);
        const bDayP = document.createElement('P');
        bDayP.textContent = `${this.name}is now ${this.age} years old`;

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

    console.log(jane.age);
    jane.birthday();
    console.log(jane.age);

    const dimitri = new Person(
        "Dimitri",
        41,
        ["Painting", "Driving"]
    );

    console.log(dimitri);

    console.log(`My name is ${dimitri.name}. I am ${dimitri.age} years old`);

    dimitri.sayHello();