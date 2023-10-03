const form = document.forms[0];
console.log(form);

const input1 = document.getElementById('fname');
console.log(input1);
const input2 = document.getElementById('lname');
console.log(input2);

const firstname = form.firstname;
const lastname = form.lastname;
console.log(firstname);
console.log(lastname);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fname = e.target.firstname.value;
    const lname = e.target.lastname.value;
    if(fname && lname){
        const list = document.querySelector('ul');
        list.innerHTML = `
        <li>${fname}</li>
        <li>${lname}</li>
        `
    }
});