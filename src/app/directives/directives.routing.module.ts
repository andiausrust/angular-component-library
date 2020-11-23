import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DirectivesDocumentationComponent} from './directives-documentation/directives-documentation.component';

const DIRECTIVES_ROUTES: Route[] = [
    {
        path: '',
        component: DirectivesDocumentationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(DIRECTIVES_ROUTES)],
    exports: [RouterModule]
})
export class DirectivesRoutingModule {
}
