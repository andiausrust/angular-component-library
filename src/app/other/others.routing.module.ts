import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {OthersDocumentationComponent} from './others-documentation/others-documentation.component';
import {FormDirtyGuard} from './guards/form-dirty-guard/form-dirty.guard';

const OTHERS_ROUTES: Route[] = [
    {
        path: '',
        component: OthersDocumentationComponent,
        canDeactivate: [FormDirtyGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(OTHERS_ROUTES)],
    exports: [RouterModule]
})
export class OthersRoutingModule {
}
