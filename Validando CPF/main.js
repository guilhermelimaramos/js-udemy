function getCpf (cpf) {
  cpfClean = cpf.replace(/\D+/g, '');
  cpfInput = Array.from(cpfClean)
  cpfArray = Array.from(cpfClean)
  cpfStr = cpfArray.splice(0, 9)
  
  cpfCheck = convertTo(cpfStr, Number)
  
  calcDigits(cpfCheck)
  calcDigits(cpfCheck)
  

  cpfInput = convertTo(cpfInput, Number)


  isValid(cpfInput, cpfCheck)


  // if (isValid) console.log("Cpf is Valid!!!")
  if (isValid == false) console.log("Cpf is Invalid!!!")

} 


function calcDigits (array) {

  let aux = array.length + 1;
  const sum = array.map(value => value *= aux--
    ).reduce((acc, value) => acc += value, 0);

  let digit = 11 - (sum % 11)
  
  let newDigit = digit > 9 ? 0 : digit
  cpfCheck.push(newDigit)
}


function convertTo (array, type) {
  const cpfConvert = array.map(value =>
    type(value) 
  )
  return cpfConvert
} 

function isValid (cpf, cpfCheck) {
  for (let i = 0; i < cpf.length; i++) {
    if (cpf[i] !== cpfCheck[i]) {
      return console.log("CPF is Invalid!!!");
    }
  }

  return console.log("CPF is Valid!!!");
}


// getCpf('705.484.450-52');
// getCpf('070.987.720-03')
// getCpf('365.573.568-52')
getCpf('195.044.748-02')
