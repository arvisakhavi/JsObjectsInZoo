function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();
    var stinger = new Bees("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    stinger.sleep();
    var zookeeper = new Zookeeper ("Zoebot");
    zookeeper.feedAnimals([tigger, pooh, rarity, gemma, stinger],"apples");
}

var animalPopulation = 0;

function sleep(name){
    console.log(name + " sleeps for 8 hours");
}

var favoriteFood = "bacon";

class Zookeeper {
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals,food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation +  " total animals ");
        for(var i = 0; i < animals.length; i ++){
            animals[i].eat(food);
        }
    }
}

function feedAnimals(animals,food){
    console.log(this.name + " is feeding " + food + " to " + animals.length + " animals ");
}

class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;

        animalPopulation++;
    }

    static getPopulation (){
        console.log (animalPopulation);
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        this.favoriteFood == food? console.log ("YUM!!! " + this.name + " wants more " + food + "") : this.sleep();
    }
}

class Tiger extends Animal {
    constructor (name){
        super(name, "meat");
    }
}

class Bear extends Animal {
    constructor (name) {
        super (name, "fish");
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal {
    constructor (name){
        super (name, "marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }
    eat(food){
        if(this.favoriteFood == food){
            console.log(this.name + " eats " + food);
            console.log ("YUM!!! " + this.name + " wants more " + food + "");
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}


class Bees extends Animal {
    constructor(name) {
        super (name, "pollen");
    }
    eat(food){
        if (this.favoriteFood == food){
            console.log(this.name + " eats " + food);
            console.log("YUM!!! " + this.name + " wants more " + food + "");
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}



// class Tiger {
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "meat";
//     }
//     sleep(){
//         console.log(this.name + " sleeps for 8 hours");
//     }
//     eat(food){
//         console.log(this.name + " eats " + food);
//         this.favoriteFood == food? console.log ("YUM!!! " + this.name + " wants more " + food + "") : this.sleep();
//     }
// }

// class Bear{
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "fish";
//     }
//     sleep(){
//         console.log(this.name + " hibernates for 4 months");
//     }
//     eat(food){
//         console.log(this.name + " eats " + food);
//         this.favoriteFood == food? console.log ("YUM!!! " + this.name + " wants more " + food + "") : this.sleep();
//     }
// }
//
// // class Polygon extends Shape {
// //
// //     constructor(height, width) {
// //         super('Polygon');
// //         this.height = height;
// //         this.width = width;
// //     }
// //
// //     sayHistory() {
// //         console.log('"Polygon" is derived from the Greek polus (many) ' +
// //             'and gonia (angle).');
// //     }
// // }
//
//
// class Bear extends Animal {
//     // complete the Bear class here, using the completed Tiger class as an example
//
//     // here, we override the sleep function
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//         // add in your Bear-specific sleep code here
//     }
// }
