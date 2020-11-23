import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: 'services',
        loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule)
    },
    {
        path: 'directives',
        loadChildren: () => import('./directives/directive.module').then(m => m.DirectiveModule)
    },
    {
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
    },
    {
        path: 'others',
        loadChildren: () => import('./other/others.module').then(m => m.OthersModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModules {
}
