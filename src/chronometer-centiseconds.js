class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return (this.currentTime % 6000) % 100;
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = value.toString();
    if (twoDigitNumber.length == 1) {
      twoDigitNumber = "0" + twoDigitNumber;
    }
    return twoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());
    let centi = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${min}:${sec}.${centi}`;
  }
}
