// alert("Hello, World! JavaScript is loaded!");

// This is a single line comment. Starts with //

/** This is a multi-line
 * comment. It looks much the same as what we used in CSS
 */

 /** Assignments */

 //Variables declared with the "var" keyword, are considered "function-scoped."
 //We typically avoid using var, in favour of new declaration keywords.""
 var myFirstVariable = "Hello";

 //Variables declared with the "let" keyword are considered "block-scoped."
 // "Let" variables can be re-assigned later in the program.
 let mySecondVariable ="World!";

 // Variables declared with the "const" keyword, are considered "block-scoped."
 // "Const" variables CANNOT be re-assigned later in the program.

 const myThirdVariable = myFirstVariable + "," + mySecondVariable;
 // Concatenation character is the "+" sign.
 // It glues strings together!

 /**
  * Datatypes
  */

  const myString = "This is a string";
  const myInteger = 34; //Ints and Float are TECHNICALLY same data type in JS.
  const myFloat = 16.782; // The datatype is simply called "Number."
  const myTrueBool = true; // Booleans can be either true or false.
  const myFalseBool = false; // CAPS do matter. It must be lowercase.
  const myNull = null; // A defined/ existing variable with no assigned value.
  const myUndefined = undefined; // The variable does not exist.
  const myNaN = NaN; // "Not a number". So when math goes horribly wrong..
  const myArray = [ //Arrays can store multiple pieces of data (including other arrays!)
      myString,
      myInteger,
      myFloat,
      myTrueBool,
      myNaN,
      myNull,
      myUndefined,
      myFalseBool
  ];

  console.log(" Hello to the browser console!");
  console.log(myArray);
  console.log(10 % 3);

  /** Concatenation vs template literals */

  const myName = "Preet";
  const concattedString = "Hello, " + myName + "!"; // this was an addition
  console.log(concattedString); 

  console.log(3+"3");// this was a concatenatiom
  console.log(3+3); // this was an addition
  console.log(3+3+ "3"); // addition of first two and then concatenation
  console.log (3+3 +Number("3")); //we can use number function in js to convert strings to numbers

  console.log(String (3) + String (3) + "3"); // we can use string in js to convert numbers to strings

  console.log(parseInt(38.957));  //parseInt() and parsefloat() might bit a more familiar but value may or may not have decimal points


  //CONCATENATION:
  //const concattedString = "Hello," +myName + "!";

  const templateLiteralString = `Hello, ${myName}!`; //Template literals must be inside back ticks "NOT Single quotes"
  console.log (templateLiteralString);

  //Back tics space are white-space sensitive!
  console.log(`
  This is a string in back-ticks (\`).
  It is white space and new-line sensitive!
  Great for formatting your outputs.Great

  ===
 An example of use for a template literal could be..
 Our Array: myArray is 8 items long: ${myArray.length} items long.
 Fourth index includes the value: ${myArray[4]}
 All template literals are wrapped in: "\${}"
 `);

 //Loops in javascript

 console.log("WHILE LOOP PRACTICE: \n ============================");

 let myWhileIterator = 5;
 while( myWhileIterator > 0) //if >=0 then display zero, depends upon comparison operator
 {    
                  //Repeats the code block as long as condition evaluates to (Boolean)true.
console.log(`While iterator: ${myWhileIterator}`);
myWhileIterator--; // myWhileIterator = myWhileIterator -1;
 }

console.log("FOR... OF LOOP PRACTICE: \n=========================");
 const myForArray = ["Walmart", "BestBuy", "Superstore","Safeway"];
 for(const arrayItem of myForArray) // for..of will iterate on its own thru the array.
 {
    console.log(`This array item in our loop contains: ${arrayItem}`);
 }

 //let myNum=5 
 // All 3 equivalent
// myNum = myNum + 1;
//myNum++;
//myNum += 1;
console.log("FOR LOOP PRACTICE: \n========================");
for (let myForIterator = -5; myForIterator <30; myForIterator += 10 ) 
{
    //for loop has 3 parts
    //assignment, condition, iteration
    console.log(`This iteration is our for loop's value is: ${myForIterator}`);

}

//functions in javascript

function myAdditionFunction (num1 = 0, num2= 0)
{
    return Number(num1) + Number (num2); //any code after return will not run as return is last thing in code
}

// Testing function
const add2And4 = myAdditionFunction(2,4);
console.log(add2And4);

console.log(myAdditionFunction(-15, 35));

console.log(myAdditionFunction(3.14, 67));

function mySubtractionFunction( num1, num2)
{
    const difference = num1 - num2; //"-" is only used for subtraction and js automatically tries to covert number datatype in this case.

    return difference;
}
console.log (mySubtractionFunction(100/50));

//const/let for declaration - 1
//name of our function - 2
// assignment operator - 3
// paranthesis "()" with any parameters inside -4 
// "fat arrow marks the beginning of function logic" - 5
//what follows the fat arrow will simply be returned from the function - 6.1
//we can use curly braces to manage larger instructions sets, which will give us more control over when/how we return the function - 6.2



const myDivisionFunction = ( num1, num2 ) => num1 / num2;  // see 6.1
console.log( "Division ( 36, 6): " + myDivisionFunction( 36, 6 ) );


const myMultiplicationFunction = ( num1 = 0, num2 = 0 ) => // see 6.2
{
    const product = num1 * num2;
    return product;
};

console.log(myMultiplicationFunction(3,9));

/**
 * JavaScript Object
 */

 const myPersonalInfoArray =[
     "Preet",
     38,
     ["Skydiving", "Programming", "Mountain Climbing"]
 ];

 console.log("Person as an array:");
 console.log(myPersonalInfoArray);
 console.log(`Name is: ${myPersonalInfoArray[0]}`);

 const myObject = {
     name: "Preet",
     age: 38,
     hobbies: ["Skydiving", "Programming", "Mountain Climbing"]
 };

 console.log("Person as an object:");
 console.log(myObject);
 console.log(`Name is: ${myObject.name}.Age is: ${myObject.age}`);