import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {

    @Input() public width = '100%';
    @Input() public height = '100%';

    constructor() {
    }

    ngOnInit(): void {
    }

    public get dimensions(): any {
        return {width: this.width, height: this.height};
    }

}
