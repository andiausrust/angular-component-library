import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesDocumentationComponent} from './pipes-documentation/pipes-documentation.component';
import {PipesRoutesModule} from './pipes.routes.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import {ComponentsModule} from '../components/components.module';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FlattenPipe } from './flatten.pipe';
import { FilterTermPipe } from './filter-term.pipe';


@NgModule({
    declarations: [
        PipesDocumentationComponent,
        TruncatePipe,
        CreditCardFormatterPipe,
        FlattenPipe,
        FilterTermPipe
    ],
    imports: [
        CommonModule,
        PipesRoutesModule,
        ComponentsModule
    ],
    exports: [
        TruncatePipe
    ]
})
export class PipesModule {
}
