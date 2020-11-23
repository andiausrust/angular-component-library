import {NgModule} from '@angular/core';
import {ServicesModuleRouting} from './services.module.routing';
import {ServiceDocumentationComponent} from './service-documentation/service-documentation.component';
import {ComponentsModule} from '../components/components.module';
import {CommonModule} from '@angular/common';
import {Subject} from 'rxjs';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
    declarations: [ServiceDocumentationComponent],
    imports: [ServicesModuleRouting, ComponentsModule, CommonModule, SharedModule],
    exports: [ServicesModuleRouting]
})
export class ServicesModule {



}
