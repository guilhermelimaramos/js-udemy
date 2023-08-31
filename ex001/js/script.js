function MyScope() {
    const form = document.querySelector(".form");
    const result = document.querySelector(".result");
    // form.addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     alert('Formulário enviado!');
    // }); // addEventListener é mais moderno e permite adicionar mais de um evento ao mesmo elemento
    
    // const peoples = [];

    function receiveEventForm(event) {
      event.preventDefault();
      const name = form.querySelector(".name").value;
      const lastname = form.querySelector(".lastname").value;
      const weight = Number(form.querySelector(".weight").value);
      const height = Number(form.querySelector(".height").value);
      
      if (!weight) {
        setResult("Weight is invalid!", false);
        return alert("Weight is invalid!");
      }

      if (!height) {
        setResult("Height is invalid!", false);
        return alert("Height is invalid!");
      }

      const imc = getImc(weight, height);
      const levelImc = getLevelImc(imc);

      function getLevelImc(imc) {
        
        if (imc < 18.5) return "Underweight";
        if (imc >=18.5 && imc <= 24.9) return "Normal weight";
        if (imc >= 25 && imc <= 29.9) return "Overweight";
        if (imc >= 30 && imc <= 34.9) return "Obesity grade 1";
        if (imc >= 35 && imc <= 39.9) return "Obesity grade 2";
        if (imc >= 40) return "Obesity grade 3";

      }

      console.log("All ok!");
      // peoples.push({
      //   name,
      //   lastname,
      //   weight,
      //   height
      // });
      setResult(`
        Name: ${name} ${lastname}, Peso:${weight}, Altura:${height}, IMC: ${imc} - ${levelImc}
      `, true);
      
    }

    function createP () {
      const p = document.createElement("p");
      return p;

    }

    function getImc(weight, height) {
      const imc = weight / height ** 2;
      return imc.toFixed(2);
    }

    function setResult(text, isValid) {

      if ( isValid == true ) {
        const p = createP();
        p.classList.add("result-p");
        result.appendChild(p);
        p.innerHTML = text;
      }
    }

    
    
    form.addEventListener("submit", receiveEventForm);
    
  }

  MyScope();
  
  
  