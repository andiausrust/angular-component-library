import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-count-down-timer',
    templateUrl: './count-down-timer.component.html',
    styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit {

    private countDownTime: number;
    private timerNumerics = {
      milliseconds: 1000,
      secondsInMinutes: 60,
      minutesInHours: 60,
      hoursInDay: 24
    };

    @Input()
    set time(value: string) {
        this.countDownTime = new Date(value).getTime();
    }

    get days(): string {
        const {milliseconds, secondsInMinutes, minutesInHours, hoursInDay} = this.timerNumerics;

        const days = Math.floor(this.getTimeDifference()
            / (hoursInDay * minutesInHours * secondsInMinutes * milliseconds));

        return this.formatTime(days);
    }

    get hours(): string {
        const {milliseconds, secondsInMinutes, minutesInHours, hoursInDay} = this.timerNumerics;

        const hours = Math.floor(this.getTimeDifference()
            % (hoursInDay * minutesInHours * secondsInMinutes * milliseconds)
            / (minutesInHours * secondsInMinutes * milliseconds));

        return this.formatTime(hours);
    }

    get minutes(): string {
        const {milliseconds, secondsInMinutes, minutesInHours} = this.timerNumerics;

        const minutes = Math.floor(this.getTimeDifference()
            % (minutesInHours * secondsInMinutes * milliseconds) / (secondsInMinutes * milliseconds));

        return this.formatTime(minutes);
    }

    get seconds(): string {
        const {milliseconds, secondsInMinutes} = this.timerNumerics;
        const seconds = Math.floor((this.getTimeDifference() % (secondsInMinutes * milliseconds)) / milliseconds);

        return this.formatTime(seconds);
    }

    private getTimeDifference(): number {
        const currentTime = new Date().getTime();
        return this.countDownTime - currentTime;
    }

    private formatTime(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    constructor(private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.changeDetector.detectChanges();
    }

}
