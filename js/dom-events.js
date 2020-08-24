alert ( "DOM events JS loaded!");

/**
 * Targeting via the DOM (Document Object Model) in Javascript
 */

 const myH2 = document.getElementById('target-me');
 console.log(myH2);

 const myP = document.querySelector('#target-me + p');
 console.log(myP);

 const hoverButton = document.querySelector('p > button');
 console.log(hoverButton);
 

 const firstSpan = document.querySelector('p > span:nth-child(2)');
 console.log(firstSpan);

 const clickButton = document.querySelector('p > button:nth-of-type(2)');
 console.log(clickButton);

 const secondSpan = document.querySelector('p > span:nth-child(4)');
 console.log(secondSpan);

 /**
  * DOM/ Element Manipulation
  */

  // We can use JS to update/replace content in elements.
  myH2.textContent="This H2 was found and Updated!";
  console.log(`Outputted string into our <h2> element!`);

  myH2.className = `salmon-coloured-text`;
  console.log('Change the H2 font color to Salmon')

  /**
   * Event Listeners
   */

   hoverButton.addEventListener('mouseenter', () => {console.log('The mouse has entered the button!')});

