// Exercise 1
// Predicitional output: I am John doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
console.log(usersArray);
usersArray.forEach(item => item[1] = item[1] * 2);
console.log(usersArray);

// Exercise 4
// Output prediction: Object

// Exercise 5
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
// The correct way of extending this Dog class:
  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

// Exercise 6
//[2] === [2];
// Will be false because both areb different instances in memory.
//{} === {}
// Will be false because of the same reason.

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
// will be 4 because it references to the object1
console.log(object3.number)
// will be 4 because references to object2 which references to object1
console.log(object4.number)
// will be 5 because it another object

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color){
        super(name, type, color);
    }

    sound(sound){
        this.sound = sound;
        console.log(`${this.sound}, I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
}

let farmerCow = new Mammal('Lily', 'cow', 'brown and white', 'Mooo');
farmerCow.sound('Mooo');
