import Veiculo from './veiculo'

class Moto extends Veiculo {
    public acelerar(): void{
    this.velocidade = this.velocidade + 20 
    }
}

export default Moto 