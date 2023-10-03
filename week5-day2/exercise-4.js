const form = document.forms[0];
const radius = form.radius;
let volume = form.volume;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    volume.value = Math.round(4 / 3 * 3.14 * radius.value);
    console.log(volume.value);
})