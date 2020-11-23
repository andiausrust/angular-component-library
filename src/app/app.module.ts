import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutesModules} from './app.routes.modules';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from './components/components.module';
import {SharedModule} from './shared/shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutesModules,
        HttpClientModule,
        ComponentsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
