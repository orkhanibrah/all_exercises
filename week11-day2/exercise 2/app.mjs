const persons = await import('./data.mjs');

const calculateAverage = array => {
    let sumAge = 0;
    for (let i=0; i<array.lengtnoh; i++){
        sumAge += array[i].age;
    }
    return sumAge / array.length;
};

console.log(calculateAverage(persons));