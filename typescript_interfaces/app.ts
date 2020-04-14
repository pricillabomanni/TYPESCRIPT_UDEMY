import Carro from './carro'
import Moto from './moto'
import Concessionaria from './concessionaria'

let carro = new Carro('velost', 3);

let moto = new Moto(); 
moto.acelerar()

let concessionaria = new Concessionaria('', [])



console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorariosDeFuncionamento())