class CountdownTimer {
    constructor({selector, targetDate}) {
        this.IntervalId = null;
        this.targetDate = targetDate;
        this.selector = selector;
    }

    start() {
        this.intervalID = setInterval(() => {
            const time = this.targetDate - Date.now();
            const prettyTime = this.decorateTime(time);
            this.printTime(prettyTime);
            if (time === 0) {  // зупиняємо таймер на нулі
                this.stop();
            }
        },1000);
    }

    stop() {
        clearInterval(this.intervalID);
    }

    decorateTime(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days, hours, mins, secs};
    }

    pad(value) {
        return String(value).padStart(2, '0'); // для вирівнювання к-ті цифр
    }

    printTime({ days, hours, mins, secs }) {
        document.querySelector(`${this.selector} span[data-value="days"]`).textContent = days;
        document.querySelector(`${this.selector} span[data-value="hours"]`).textContent = hours;
        document.querySelector(`${this.selector} span[data-value="mins"]`).textContent = mins;
        document.querySelector(`${this.selector} span[data-value="secs"]`).textContent = secs;
    }
    
}

const cTimer =  new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

cTimer.start();



