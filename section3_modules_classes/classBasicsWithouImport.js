class Helper {
    static logTwice(message) {
        console.log(message);
        console.log(message)
    }
}

Helper.logTwice('Pirikichi!!');

class Repas {
    constructor(name) {
        this._name = name;
    }
    greet() {
        console.log(`Je suis ${this.name} et Je suis ${this.temperature}`)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}


class Lait extends Repas {
    constructor() {
        super('Lait');
        this.temperature = 'froide';
    }

    greet() {
        super.greet();
    }
}

let lait = new Lait();
console.log(lait.__proto__ === Lait.prototype);
lait.greet();