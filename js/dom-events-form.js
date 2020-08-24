
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

});