function createCalculator (){
  return {

    display: document.querySelector('.display'),
    

    start() {
      this.clickButtons()
      this.pressEnter()
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.calc();
        }
      });
    },


    clickButtons() {
      document.addEventListener('click', function (event) {
        const el = event.target;

        if (el.classList.contains('btn-num')) {
          this.btnForDiplay(el.innerText)
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.delOne()
        }

        if (el.classList.contains('btn-eq')) {
          this.calc()
        }
      }.bind(this))
    },


    btnForDiplay(value) {
      this.display.value += value;
    },
    
    clearDisplay () {
      this.display.value = '';
    },

    delOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calc() {
      let account = this.display.value;
      
      try {
        account = eval(account)

        if (!account) {
          alert('Invalid Account!!!')
          return;
        }
        this.display.value = account
      }catch (e) {
        alert('Invalid Account!!!');
        return
      }
    }
  }
};

const calculator = createCalculator();

calculator.start();