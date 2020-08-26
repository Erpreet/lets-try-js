
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


/**
 * Lets grab live data based on timer
 */

 const latDD = document.getElementById('lat');
 const longDD = document.getElementById('long');
 console.log(latDD);
 console.log(longDD); // Test to make sure right stuff was grabbed


 //Add a function that grabs data from API and updates the element
const updateLatLong = () => {
    fetch('http://api.open-notify.org/iss-now.json')
    .then(response => {return response.json();}) //return a js object converted from JSON response string
    .then(data => {
        console.log(data); // check if data came thru
        //Grab our latitude n longitude from data object
        const lat = data.iss_position.latitude;
        const long = data.iss_position.longitude;

        latDD.textContent=lat;
        longDD.textContent=long;
    })
    .catch(error => {console.log(error); });
}
updateLatLong();
 //Add a repeating timer so that function can repeat

 setInterval(updateLatLong, 1500);  //repeat "updateLatLong" every 15 sec-1500 ms

