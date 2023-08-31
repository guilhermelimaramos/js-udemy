const pessoa01 = {
  nome: 'Guilherme',
  sobrenome: 'Lima',
  idade: 20,


  fala() { console.log(`Bom dia ${this.nome} ${this.sobrenome}, você tem ${this.idade} anos.`);}, // this é uma referência ao objeto pessoa01

  incrementIdade () 
  {
    this.idade++
  }
}


pessoa01.fala();
pessoa01.incrementIdade();
pessoa01.fala();