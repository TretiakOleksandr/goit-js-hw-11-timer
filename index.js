class CountdownTimer {
    constructor({selector, targetDate}) {
        this.IntervalId = null;
        this.targetDate = targetDate;
        this.selector = selector;

        this.daysEl = document.querySelector(`${this.selector} span[data-value="days"]`);
        this.hoursEl = document.querySelector(`${this.selector} span[data-value="hours"]`);
        this.minsEl = document.querySelector(`${this.selector} span[data-value="mins"]`);
        this.secsEl = document.querySelector(`${this.selector} span[data-value="secs"]`);
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
        this.daysEl.textContent = days;
        this.hoursEl = hours;
        this.minsEl.textContent = mins;
        this.secsEl.textContent = secs;
    }
    
}

const cTimer =  new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'), // дату змінено на майбутню
});

cTimer.start();



