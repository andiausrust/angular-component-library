import {NgModule} from '@angular/core';
import {OthersRoutingModule} from './others.routing.module';
import {OthersDocumentationComponent} from './others-documentation/others-documentation.component';
import {ComponentsModule} from '../components/components.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [OthersDocumentationComponent],
    imports: [OthersRoutingModule, ComponentsModule, CommonModule, ReactiveFormsModule],
    exports: [OthersRoutingModule]
})
export class OthersModule {
}
