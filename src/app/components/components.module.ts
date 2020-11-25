import {NgModule} from '@angular/core';
import {ComponentDocumentationComponent} from './component-documentation/component-documentation.component';
import {ComponentsRoutingModule} from './components.routing.module';
import {AccordionComponent} from './accordion/accordion.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {StarRatingsComponent} from './star-ratings/star-ratings.component';
import {TopOfPageComponent} from './top-of-page/top-of-page.component';
import {CardComponent} from './card/card.component';
import {LoaderComponent} from './loader/loader.component';
import {CommonModule} from '@angular/common';
import {CreditCardComponent} from './credit-card/credit-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TwitterPostComponent} from './twitter-post/twitter-post.component';
import {LinkedinPostComponent} from './linkedin-post/linkedin-post.component';
import {ModalComponent} from './modal/modal.component';
import {QuoteComponent} from './quote/quote.component';
import {ToggleComponent} from './toggle/toggle.component';
import {RichTextViewerComponent} from './rich-text-viewer/rich-text-viewer.component';
import {DebounceSearchComponent} from './debounce-search/debounce-search.component';
import {SearchListComponent} from './search-list/search-list.component';
import {CounterComponent} from './counter/counter.component';
import {SimpleTableComponent} from './simple-table/simple-table.component';
import {PagingComponent} from './paging/paging.component';
import {TabsComponent} from './tabs/tabs.component';
import {SortTableComponent} from './sort-table/sort-table.component';
import {EmailFormComponent} from './email-form/email-form.component';
import {RibbonComponent} from './ribbon/ribbon.component';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';
import {BannerCutOutComponent} from './banner-cut-out/banner-cut-out.component';
import {SimplePopupComponent} from './simple-popup/simple-popup.component';
import {CountDownTimerComponent} from './count-down-timer/count-down-timer.component';
import {SharedModule} from '../shared/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

@NgModule({
    declarations: [
        ComponentDocumentationComponent,
        AccordionComponent,
        CardComponent,
        ProgressBarComponent,
        StarRatingsComponent,
        TopOfPageComponent,
        LoaderComponent,
        CreditCardComponent,
        TwitterPostComponent,
        LinkedinPostComponent,
        ModalComponent,
        QuoteComponent,
        ToggleComponent,
        RichTextViewerComponent,
        DebounceSearchComponent,
        SearchListComponent,
        CounterComponent,
        SimpleTableComponent,
        PagingComponent,
        TabsComponent,
        SortTableComponent,
        EmailFormComponent,
        RibbonComponent,
        ButtonToggleComponent,
        BannerCutOutComponent,
        SimplePopupComponent,
        CountDownTimerComponent,
        FooterComponent,
        SkeletonLoaderComponent,
    ],
    imports: [ComponentsRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
    exports: [ComponentsRoutingModule, CardComponent, TabsComponent]
})
export class ComponentsModule {
}
