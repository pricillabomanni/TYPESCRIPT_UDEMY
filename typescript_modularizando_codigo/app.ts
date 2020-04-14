import Carro from './carro'
import Pessoa  from './pessoa' 
import Concessionaria from './concessionaria'




//Criar lista de carros
let carroA = new Carro ('fusca', 4)
let carroB = new Carro ('celta', 2)
let carroC = new Carro ('veloster',3)

//Criar array para guardar a lista de carros para que a concessioaria faça uso dos modelos disponiveis
let listaDeCarros: Carro[]= [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. PAilista', listaDeCarros)

//teste exibindo a lista de carros
// console.log(concessioaria.mostrarListaDeCarros())

//teste pessoa comprando o carro
let cliente = new Pessoa('Pricilla', 'Fusca')

concessionaria.mostrarListaDeCarros().map((carro: Carro ) =>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
});

console.log(cliente.dizerCarroQueTem())