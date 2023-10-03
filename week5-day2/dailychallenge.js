const form = document.forms[0];
const story = document.getElementById('story');


const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;
    if(noun && adjective && person && verb && place){
        story.innerText = `
            ${person} ${verb}s/${verb}es a/an ${adjective} ${noun} in ${place}
        `

    } else {
        alert('Please fill all the fields');
    }
})