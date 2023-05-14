// keyof guard
type Alphanumeric = number | string;

function add(param1:Alphanumeric, param2:Alphanumeric): Alphanumeric{
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2;
    }else {
        return param1.toString() + param2.toString();
    }
}

add('1', '2');
add(2, 4);


// in guard
type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: "admin";
};

function getUser(user:NormalUserType|AdminUserType) {
    if('role' in user){
        return `I am admin and My role is ${user.role}`;
    }else {
        return `I am normal user`
    }
}

const normalUser1: NormalUserType = {name: "Mr Kali"};
const adminUser1: AdminUserType = {name: "Mr Filter", role: "admin"};

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));


// instanceof guard
class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log(`I am making sound`)
    }
}

class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeBark(){
        console.log(`I am Barking`)
    }
}

class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeMeaw(){
        console.log(`I am meawing`)
    }
}

function getAnimal(animal:Animal){
    if(isDog(animal)){ //animal instanceof Dog
        animal.makeBark();
    }else if(isCat(animal)){ //animal instanceof Cat
        animal.makeMeaw();
    }else{
        animal.makeSound();
    }
}
const animal1 = new Dog("German Bhai", 'Dog'); //instance of Dog
const animal2 = new Cat('Persian Bhai', 'Cat') //instance of Cat

getAnimal(animal1)


function isDog(animal:Animal): animal is Dog{
    return animal instanceof Dog;
}

function isCat(animal:Animal): animal is Cat{
    return animal instanceof Cat;
}