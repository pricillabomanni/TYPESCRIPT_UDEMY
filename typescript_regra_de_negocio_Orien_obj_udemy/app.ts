class Carro {

    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0 

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas

    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade 
    }
}


class Concessionaria {

    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }
}


//Definir classe-objeto
class Pessoa {

    //declarar atributos
    private nome: string
    private carroPreferido: string
    private carro: any

    //não esquecer do construtor
    constructor(nome:string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }


    //declarar o metodos
    public dizerNome(): string{
        return this.nome
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro):void{
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}

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
let cliente = new Pessoa('Pricillla', 'Fusca')

concessionaria.mostrarListaDeCarros().map((carro: Carro ) =>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
});

console.log(cliente.dizerCarroQueTem())