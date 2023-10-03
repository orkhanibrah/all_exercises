let bottles = prompt('Enter the number of bottles of beer');

function makeSong(){
   let i;
    for(i=1; i<bottles; i++){
        if(bottles > 1 && i==1 && bottles-i==1){
            console.log(`
            ${bottles} bottles of beer on the wall
            ${bottles} bottles of beer
            Take 1 down, pass it around
            ${bottles - i} bottle of beer on the wall`)
            bottles = bottles - i;
        } else if(bottles > 1 && i==1 ){
            console.log(`
            ${bottles} bottles of beer on the wall
            ${bottles} bottles of beer
            Take 1 down, pass it around
            ${bottles - i} bottles of beer on the wall`)
            bottles = bottles - i;
        }  else {
            console.log(`
            ${bottles} bottles of beer on the wall
            ${bottles} bottles of beer
            Take ${i} down, pass them around
            ${bottles -i} bottles of beer on the wall`)
            bottles = bottles - i;
        }
    }

    if(bottles == 1){
        console.log(`
            A bottle of beer on the wall
            A bottle of beer
            Take 1 down, pass it around
            No bottle of beer on the wall`)
        } else {
            console.log(`
            ${bottles} bottles of beer on the wall
            ${bottles} bottles of beer
            Take ${bottles} down, pass them around
            No bottle of beer on the wall`)
        }




}




makeSong();