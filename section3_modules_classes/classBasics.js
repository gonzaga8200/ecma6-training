class Repas {
    constructor(name) {
        this.name = name;
    }
    greet(){
        console.log('salut, com ça va?')
    }

    printFood(){
        let food = `El repas est ${this.name} et la température est ${this.temperature}`;
        console.log(food);
    }
}

class Lait extends Repas{
    constructor(temperature) {
        super('lait');
        this.temperature = temperature;

    }

}


export {Repas, Lait};