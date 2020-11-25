import {Component, OnInit, ViewChild} from '@angular/core';
import {AccordionItem} from '../accordion/accordion-item';
import {LoaderType} from '../loader/models/loader.type.enums';
import {RibbonType} from '../ribbon/ribbon.type';
import {RibbonLocation} from '../ribbon/ribbonLocation';
import {ButtonMeta} from '../button-toggle/button-meta.model';
import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
    selector: 'app-component-documentation',
    templateUrl: './component-documentation.component.html',
    styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent implements OnInit {

    accordionItems: AccordionItem[] = [
        {
            title: 'Example 1',
            content: 'Example Content 1',
            isExpanded: false
        },
        {
            title: 'Example 2',
            content: 'Example Content 2',
            isExpanded: false
        }
    ];

    progressValue = 25;
    loaderType = LoaderType.Loading;
    toggleValue = false;

    public tabs = [
        {title: 'Tab 1', active: true},
        {title: 'Tab 2', active: false}
    ];
    selectedTab = 0;

    public RibbonType = RibbonType;
    public RibbonLocation = RibbonLocation;
    public ribbonStyle = {type: RibbonType.Info, location: this.RibbonLocation.BottomLeft};
    public buttonToggleOptions: ButtonMeta[] = [
        new ButtonMeta({ id: 1, title: 'Bold' }),
        new ButtonMeta({ id: 2, title: 'Italic' }),
        new ButtonMeta({ id: 3, title: 'Underline' }),
    ];

    @ViewChild('snackbar', {}) snackBar: SnackbarComponent;

    public loaded = false;

    public snackBarShow(): void {
        this.snackBar.showMessage('Snackbar Example');
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    debounceExampleMethod($event: string): void {
        console.log($event);
    }
}
