class Triangulo {
    constructor(baseParam, alturaParam){
        this.base = baseParam;
        this.altura = alturaParam;
    }

    calcularArea(){
        return (this.base * this.altura)/2;
    }
}
//instância do objeto da classe Triangulo:
let triangulo = new Triangulo(4, 3);
console.log(triangulo.calcularArea());