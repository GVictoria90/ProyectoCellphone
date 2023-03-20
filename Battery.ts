export default class battery {
  private capacity: number;

  
  constructor() {
    this.capacity = 100;
  }
  
  rechargeBattery(): void {
    this.capacity = 100;
  }

  dischargeBattery(discharge: number): void {
    if(this.capacity>=discharge) {
      this.capacity -= discharge;
    }else {
      this.capacity = 0;
    }
  }

  getCurrentCapacity(): number {
    return this.capacity;
  }

}




