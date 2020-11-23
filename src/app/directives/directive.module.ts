import {NgModule} from '@angular/core';
import {DirectivesDocumentationComponent} from './directives-documentation/directives-documentation.component';
import {DirectivesRoutingModule} from './directives.routing.module';
import {PipesModule} from '../pipes/pipes.module';
import {DebounceClickDirective} from './debounce-click.directive';
import {ComponentsModule} from '../components/components.module';
import {RippleDirective} from './ripple.directive';
import {ScaleDirective} from './scale.directive';
import {CopyDirective} from './copy.directive';
import { LazyLoadImageDirective } from './lazy-load-image.directive';

@NgModule({
    declarations: [DirectivesDocumentationComponent, DebounceClickDirective, RippleDirective, ScaleDirective, CopyDirective, LazyLoadImageDirective],
    imports: [DirectivesRoutingModule, PipesModule, ComponentsModule],
    exports: [DirectivesRoutingModule],
    providers: [
        {
            provide: 'Navigator', useValue: navigator
        },
        {
            provide: 'Document', useValue: document
        },
        {
            provide: 'Window', useValue: window
        }
    ]
})
export class DirectiveModule {
}
