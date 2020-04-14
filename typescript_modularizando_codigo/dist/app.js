"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = __importDefault(require("./carro"));
var pessoa_1 = __importDefault(require("./pessoa"));
var concessionaria_1 = __importDefault(require("./concessionaria"));
//Criar lista de carros
var carroA = new carro_1.default('fusca', 4);
var carroB = new carro_1.default('celta', 2);
var carroC = new carro_1.default('veloster', 3);
//Criar array para guardar a lista de carros para que a concessioaria faça uso dos modelos disponiveis
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new concessionaria_1.default('Av. PAilista', listaDeCarros);
//teste exibindo a lista de carros
// console.log(concessioaria.mostrarListaDeCarros())
//teste pessoa comprando o carro
var cliente = new pessoa_1.default('Pricilla', 'Fusca');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
