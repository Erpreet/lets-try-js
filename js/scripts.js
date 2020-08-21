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

 let myWhileIterator = 5;
 while( ) {                 //Repeats the code block as long as condition evaluates to (Boolean)true.

 }




