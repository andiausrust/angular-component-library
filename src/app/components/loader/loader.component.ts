import {Component, Input, OnInit} from '@angular/core';
import {LoaderType} from './models/loader.type.enums';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    @Input() isLoading = false;
    @Input() loaderType = LoaderType.Circular;

    LoaderType = LoaderType;
    loading = 'Loading';
    private loadingPeriods = '.';

    get loadingText(): string {
        return `${this.loading}${this.loadingPeriods}`;
    }


    constructor() {
    }

    ngOnInit(): void {
        if (this.loaderType === LoaderType.Loading) {
            this.updateLoaderPeriods();
        }
    }

    private updateLoaderPeriods(): void {
        let currentStep = 0;

        setInterval(() => {
            switch (currentStep % 3) {
                case 0:
                    this.loadingPeriods = '..\0';
                    currentStep++;
                    break;
                case 1:
                    this.loadingPeriods = '...';
                    currentStep++;
                    break;
                case 2:
                    this.loadingPeriods = '.\0\0';
                    currentStep = 0;
                    break;

            }
        }, 500);
    }

}
