class Imc {
    constructor(pesoParam, alturaParam){
        this.peso = pesoParam;
        this.altura = alturaParam;
    }

    calcularMassaCorporal(){
        return this.peso/(this.altura * this.altura);
    }

    calcularImc(){
        if (this.calcularMassaCorporal() > 30) {
            return "IMC é de obsidade"
        } else if (this.calcularMassaCorporal() > 24.9 && this.calcularMassaCorporal() < 30) {
            return "IMC é de sobrepeso"
        } else if (this.calcularMassaCorporal() > 18.5 && this.calcularMassaCorporal() < 24.9) {
            return "IMC é normal"
        } else {
            return "IMC é de magreza"
        }
    }
}

let imcPaola = new Imc(50, 1.57);
console.log(imcPaola.calcularMassaCorporal(), imcPaola.calcularImc());
