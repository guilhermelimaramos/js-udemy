function ValidCpf (cpf) {
  Object.defineProperty(this, 'cpfClean', {
    enumerable: true,
    get: () => {
      return cpf.replace(/\D+/g, '');
    }
  });
}

ValidCpf.prototype.valid = function() {
  if (typeof this.cpfClean === 'undefined') return false;
  if (this.cpfClean.length !== 11) return false;
  if(!this.isSenquicial()) return false;

  const partialCpf = this.cpfClean.slice(0,-2)

  const firstDigit = this.calcDigit(partialCpf)
  const secondDigit = this.calcDigit(partialCpf + firstDigit)

  const newCpf = partialCpf + firstDigit + secondDigit
  return newCpf === this.cpfClean
  
}

ValidCpf.prototype.calcDigit = function(partialCpf) {
  const cpfArray = Array.from(partialCpf)
  let regressive = cpfArray.length + 1

  let digit = cpfArray.reduce((acc, value ) => {
    acc += Number(value) * regressive--
    return acc
  }, 0)

  digit = 11 - (digit % 11)
  return digit > 9 ? '0' : String(digit) 

};

ValidCpf.prototype.isSenquicial = function() {
  const seq = this.cpfClean[0].repeat(this.cpfClean.length)
  if (seq === this.cpfClean) return false;
  
  return true
}

// const cpf = new ValidCpf('705.484.450-52');
const cpf = new ValidCpf('111.111.111-11');

console.log(cpf.valid())


