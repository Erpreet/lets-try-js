
const helloForm = document.querySelector('form');
console.log(helloForm);

const nameField = document.getElementById('your-name');
console.log(nameField);

const helloList = document.querySelector('#hello-list');
console.log(helloList);

helloForm.addEventListener('submit',(event ) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target);

    const name = nameField.value;
    console.log(name);

    const newLI = document.createElement('LI');
    const newCheckBox = document.createElement('INPUT');
    newCheckBox.type = "checkbox";

    console.log(newLI);

    newLI.textContent = `Hello, ${name}!`;
    newLI.prepend(newCheckBox);
    newCheckBox.addEventListener('click', () => {});
    console.log(newLI.textContent);
    console.log(newLI);

    helloList.appendChild(newLI);

});