function getCarHonda(carInventory){
    const firstHonda = carInventory.filter(item => item.car_make == 'Honda')[0]
    return firstHonda;
}

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

const honda = getCarHonda(inventory);
console.log(honda);
console.log(`This is a ${honda.car_make} ${honda.car_model} from ${honda.car_year}.`);

// Part 2
function sortCarInventoryByYear(carInventory){
    inventory.sort((a, b) => a.car_year - b.car_year);
    return carInventory;
}
console.log(sortCarInventoryByYear(inventory));