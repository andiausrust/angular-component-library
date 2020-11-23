import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ServiceDocumentationComponent} from './service-documentation/service-documentation.component';

const SERVICES_ROUTES: Route[] = [
    {
        path: '',
        component: ServiceDocumentationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(SERVICES_ROUTES)],
    exports: [RouterModule]
})
export class ServicesModuleRouting {
}
