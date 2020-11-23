import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pipes-documentation',
    templateUrl: './pipes-documentation.component.html',
    styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent implements OnInit {

    flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

    constructor() {
    }

    ngOnInit(): void {
    }

    modifyFlatten(): void {
        this.flattenData.push(3, 5);
    }

    reassignFlatten(): void {
        this.flattenData = [...this.flattenData];
    }

}
