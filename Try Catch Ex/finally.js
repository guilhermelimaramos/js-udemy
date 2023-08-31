// try {
//   console.log(a);
//   console.log("open a file");
//   console.log("write the file");
//   console.log("close the file");
// }catch (e){
//   console.log(e.message);
// }finally {
//   console.log("finally block");
// }

function returnDate (date) {
  if (date && !(date instanceof Date) ){
    throw new Error("Invalid Date");
  }
  
  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString('pt-BR', {
    minute: '2-digit',
    second: '2-digit',
    hour: '2-digit',
    hour12: false
  });
}


try {
  let date = returnDate(new Date());
  console.log(date);
}catch (e) {
  console.log(e.message);
} finally {
  console.log("Have a nice day!");
}