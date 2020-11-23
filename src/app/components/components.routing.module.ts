import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ComponentDocumentationComponent} from './component-documentation/component-documentation.component';
import {SharedModule} from '../shared/shared/shared.module';

const COMPONENT_ROUTES: Route[] = [
    {
        path: '',
        component: ComponentDocumentationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(COMPONENT_ROUTES), SharedModule],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
