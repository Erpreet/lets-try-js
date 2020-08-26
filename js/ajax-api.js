
fetch('http://api.open-notify.org/astros.json') //Add fetch to retreive Astronaut list
.then((response) => response.json())

.then(data => { 
    console.log(data); 

    //Grab the people from the object
    const people = data.people;         //Array is in people property
    console.log(people);                // This should be array

    const peopleUL = document.createElement('UL');    // Prep some HTML for output in browser

    for(const person of people) //loop thru people n add each one to list
    {
        const personLI = document.createElement('LI'); //set up the element
        personLI.textContent = `On the ${person.craft} craft, astronaut "${person.name}" is present`; // fill it with text
        peopleUL.appendChild(personLI); // send it to its way into UL we prepped
    }
        document.body.appendChild(peopleUL); // to add UL to browser so we can see it

    
} )
.catch(error =>
{
    console.log(error); // Good idea to output when debugging
} );