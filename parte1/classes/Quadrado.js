class Quadrado {
    // private, public, protected
    
    //constructor: carrega os atributos da classe

    //atributos: lado;

    //métodos: calcular area

    constructor(){
        this.lado = lado;
    }
    
    calcularArea(){
        return this.lado * this.lado;
    }

}

//Instanciando objetos da classe Quadrado:
// let quadrado = new Quadrado();
// quadrado.lado = 2;
//let outroquadrado = new Quadrado();
let quadrado = new Quadrado(4);
console.log(quadrado.calcularArea());

