import React from 'react';

const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

class UserFavoriteAnimals extends React.Component {
    render(){
        const animals = user.favAnimals;
        return animals.map(animal => (
            <ul>
                <li>{animal}</li>
            </ul>
        ))
    }
}

export default UserFavoriteAnimals;