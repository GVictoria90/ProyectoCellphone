import Simcard from "./SimCard";
import Battery from "./Battery";
import Cellphone from "./Cellphone";

let battery = new Battery();
let simcard = new Simcard('Claro', '2281345678', 1234, 2500);
let cellphone = new Cellphone('Motorola', 'Edge Neo', 'Very Peri', 129000, battery, simcard);

cellphone.makeCall('2284455667');

cellphone.sendText('2011455667', 'Hello World');

cellphone.getCurrentBattery();

cellphone.getCurrentCredit();
