class Animal {
    
    _peso;
    _idade;

    comer = () => {
        return 'O animal está comendo';
    }

    dormir = () => {
        return 'O animal está dormindo';
    }

    locomover = () => {
        return 'O animal está se locomovendo';
    }

    cumprimentar = () => {
        return `Olá, eu sou um animal e minha idade é ${this._idade} e meu peso é ${this._peso}`
    }
    
    /* métodos getter e setter */
    getPeso = () => {
        return this._peso;
    }

    setPeso = (pesoParam) => {
        return this._peso = pesoParam;
    }
}

let animal = new Animal()
console.log(animal.cumprimentar());
animal.setPeso('10kg');
console.log(animal.getPeso());
console.log(animal.cumprimentar());

//Herança de classe:
//Extensão da classe Animal para alguma classe filha que herda métodos e atributos
class Ave extends Animal {
    voar = () => {
        return 'O animal está voando'
    }
}

let ave = new Ave();
    ave.voar()
    ave.comer()
    ave.dormir()