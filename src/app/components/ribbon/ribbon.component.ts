import {Component, Input, OnInit} from '@angular/core';
import {RibbonType} from './ribbon.type';
import {RibbonLocation} from './ribbonLocation';

@Component({
    selector: 'app-ribbon',
    templateUrl: './ribbon.component.html',
    styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {

    @Input() content = '';
    @Input() public location = RibbonLocation.BottomLeft;
    @Input() public type = RibbonType.Success;

    constructor() {
    }

    ngOnInit(): void {
    }

}
