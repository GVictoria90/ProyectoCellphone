import Battery from "./Battery";
import SimCard from "./SimCard";

export default class Cellphone {
  private brand: string;
  private model: string;
  private color: string;
  private price: number;
  private battery: Battery;
  private simcard : SimCard;

  constructor(brand: string, model: string, color: string, price: number, battery: Battery, simcard: SimCard) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.battery = battery;
    this.simcard = simcard;
  }

  makeCall(phoneNumber: string): void {
    console.log(`Calling ${phoneNumber}...`);
    this.simcard.consumeCredit(50);
    this.battery.dischargeBattery(2);
  }

  sendText(phoneNumber: string, message: string): void {
    console.log(`Sending message '${message}' to ${phoneNumber}...`);
    this.simcard.consumeCredit(25);
    this.battery.dischargeBattery(1);
  }

  getSpecs(): string {
    return `${this.brand} ${this.model} (${this.color}) - $${this.price}`;
  }

  chargeCreditOnSimCard(credit: number): void {
    this.simcard.chargeCredit(credit);
  }

  getCurrentCredit(): void {
    console.log(`Available credit: ${this.simcard.getCredit()}.`);
  }

  rechargeBattery():void {
    this.battery.rechargeBattery();
  }

  getCurrentBattery(): void {
    console.log(`Available battery: ${this.battery.getCurrentCapacity()}. ${this.battery.getCurrentCapacity() < 15 ? '\nPlease recarge the battery.' : ''}`);
  }
}



  