import {concessionaria_interface} from './concessionaria_interface'
import Carro from './carro'

export default class Concessionaria implements concessionaria_interface{

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

    public fornecerHorariosDeFuncionamento(): string{
        return 'De segunda a sexta das 08:00 as 18:00 e sabado das 08:00 as 12:00'
    }
}