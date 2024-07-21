// Day 41: ES6 Classes Practice - Getters, Setters, Static properties
class Thermostat {
  constructor(tempCelsius) {
    this._celsius = tempCelsius;
  }

  get temperature() {
    return (this._celsius * 9) / 5 + 32;
  }

  set temperature(fahrenheit) {
    this._celsius = ((fahrenheit - 32) * 5) / 9;
  }

  static parseFahrenheit(fVal) {
    return ((fVal - 32) * 5) / 9;
  }
}

const term = new Thermostat(25);
console.log("Temp in Fahrenheit:", term.temperature);
term.temperature = 104;
console.log("Temp in Celsius now:", term._celsius);