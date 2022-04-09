var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo",
    },
    {
        animalType: "Cat",
        name: "Maca",
    },
    {
        animalType: "Bird",
        name: "Tweety"
    }
]

function myPetsFunction(pets) {
    var myPet = myPetsArray[1].name;
    return myPet;
}

console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;