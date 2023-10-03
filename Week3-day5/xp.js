//Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[2] = 'Jason'
people.push('Orkhan');
console.log(people.indexOf('Mary'));
let newpeople = people.slice(1, 4);
console.log(people.indexOf('Foo'));
let last = people[people.length -1];

//part 2
for (x of people) {
    console.log(x);
}
for (x of people) {
    console.log(x);
    if(x == 'Devon') {
        break;
    }
}

//Exercise 2
let colors = ['black', 'brown', 'blue', 'grey', 'white'];
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`);
}