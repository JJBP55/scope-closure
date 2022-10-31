
function createPetList(){
    let pets = [];
    function adding(pet){
        if(pet){
            pets.push(pet);
        }
        console.log(pets);
        return pets
    }
    return pets;
}

const myPetsList = createPetList();

myPetsList('tobby');
myPetsList('canelo');