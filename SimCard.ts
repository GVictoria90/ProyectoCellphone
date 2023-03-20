
export default class simCard {
    private operator: string;
    private phoneNumber: string;
    private pin: number;
    private credit: number;
    
    
    constructor(operator: string, phoneNumber: string, pin: number, credit: number) {
      this.operator = operator;
      this.phoneNumber = phoneNumber;
      this.pin = pin;
      this.credit = credit;
    }
    
    changePin(pin: number): void {
      this.pin = pin;
    }
    
    chargeCredit(credit: number): void {
      this.credit += credit;
    }

    consumeCredit(credit: number): void {
      if(this.credit>=credit) {
        this.credit -= credit;
      }else {
        this.credit = 0;
      }
    }

    getCredit(): number {
      return this.credit;
    }
  }
  