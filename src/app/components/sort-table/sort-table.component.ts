import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-sort-table',
    templateUrl: './sort-table.component.html',
    styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent implements OnInit {

    @Input() public tableData: any[] = [
        {first: 'Andi 1', dob: '10/25/88', age: 32, living: true},
        {first: 'Andi 2', dob: '10/25/90', age: 31, living: true},
        {first: 'Andi 3', dob: '10/25/95', age: 20, living: false},
        {first: 'Andi 4', dob: '10/25/87', age: 35, living: true},
    ];

    sortDirection = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    sort(headerData: { key: string; value: any }): void {
        const {key, value} = headerData;
        this.sortDirection = !this.sortDirection;

        switch (true) {
            case typeof value === 'boolean':
                this.sortBoolean(key);
                break;
            case typeof value === 'number':
                this.sortNumber(key);
                break;
            case this.isDate(value):
                this.sortDate(key);
                break;
            case typeof value === 'string':
                this.sortString(key);
                break;

        }
    }

    private isDate(value: any): any {
        const parsedDate = Date.parse(value);
        return isNaN(value) && isNaN(parsedDate);
    }

    private sortDate(key: any): void {
        this.tableData.sort((value1: any, value2: any) => {
            if (this.sortDirection) {
                return new Date(value1[key]).getTime() - new Date(value2[key]).getTime();
            } else {
                return new Date(value2[key]).getTime() - new Date(value1[key]).getTime();
            }
        });
    }

    private sortBoolean(key: string): void {
        this.tableData.sort((value1: boolean, value2: boolean) => {
            if (this.sortDirection) {
                return Number(value1[key]) - Number(value2[key]);
            } else {
                return Number(value2[key]) - Number(value1[key]);
            }
        });
    }

    private sortNumber(key: string): void {
        this.tableData.sort((value1: boolean, value2: boolean) => {
            if (this.sortDirection) {
                return Number(value1[key]) - Number(value2[key]);
            } else {
                return Number(value2[key]) - Number(value1[key]);
            }
        });
    }

    private sortString(key: string): void {
        this.tableData.sort((value1: string, value2: string) => {
            const value1UpperCase = value1[key].toUpperCase();
            const value2UpperCase = value2[key].toUpperCase();

            if (this.sortDirection) {
                if (value1UpperCase > value2UpperCase) {
                    return -1;
                }
                if (value2UpperCase > value1UpperCase) {
                    return 0;
                }
                return 0;
            } else {
                if (value2UpperCase > value1UpperCase) {
                    return -1;
                }
                if (value1UpperCase > value2UpperCase) {
                    return 0;
                }
                return 0;
            }
        });
    }
}
