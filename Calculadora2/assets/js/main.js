function Calculator () {
    this.display = document.querySelector('.display');

    this.captureClick = () => {
      document.addEventListener('click', event => {
        const el = event.target;

        if (el.classList.contains('btn-num')) this.btnToDisplay(el);

        if (el.classList.contains('btn-clear')) this.btnClear();

        if (el.classList.contains('btn-del')) this.btnDelete();

        if (el.classList.contains('btn-eq')) this.calc(el);
      
    });
  }

    this.btnToDisplay = el => {
      this.display.value += el.innerText;
      this.display.focus();
    }
    this.btnClear = () => this.display.value = '';

    this.btnDelete = () => this.display.value = this.display.value.slice(0, -1);

    this.calc = function () {
      let account = this.display.value;

      try {
        account = eval(account)

        if (!account) {
          alert('Invalid Account!!!')
          return;
        }
        
        this.display.value = account
        
      }catch (e) {
        alert('Invalid Account!!!')
        return;
      }
    }

    this.pressEnter = () => {
      document.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          this.calc();
        }
      }).bind(this)
    }

    this.pressBackspace = () => {
      document.addEventListener('keypress', event => {
        if (event.keyCode === 8) {
          this.btnDelete();
        }
        alert('backspace presionado')
      }).bind(this)
      };
    


    this.start = () => {
      this.captureClick();
      this.pressEnter();
      this.pressBackspace();
    }

}

const calculator = new Calculator();
calculator.start()