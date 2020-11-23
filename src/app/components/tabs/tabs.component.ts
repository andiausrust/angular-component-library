import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    @Input() tabs: { title: string, active: boolean }[] = [];
    @Output() selectedTabIndex = new EventEmitter<number>();

    public selectTab(selectedTab: { title: string, active: boolean }, index: number): void {
        this.tabs.forEach(tab => {
            tab.active = (selectedTab === tab);
        });
        this.selectedTabIndex.emit(index);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
