const body = document.querySelector('body');
const form = document.forms.form1;

function jsonify(e) {
    e.preventDefault();
    const fname = form.fname.value;
    const lname = form.lname.value;
    const namesObj = {name : fname, lastname : lname};
    const names = document.createElement('h3');
    names.innerText = JSON.stringify(namesObj);
    body.appendChild(names);
    
}