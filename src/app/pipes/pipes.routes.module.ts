import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {PipesDocumentationComponent} from './pipes-documentation/pipes-documentation.component';

const PIPES_ROUTES: Route[] = [
    {
        path: '',
        component: PipesDocumentationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(PIPES_ROUTES)],
    exports: [RouterModule]
})
export class PipesRoutesModule {}
