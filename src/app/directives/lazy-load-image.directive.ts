import {AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input, OnDestroy} from '@angular/core';

@Directive({
    selector: 'img[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {

    @HostBinding('attr.src') srcAttribute = null;
    @Input() src: string;
    public observer: IntersectionObserver;

    constructor(private element: ElementRef,
                @Inject('Window') public window: Window) {
    }

    ngAfterViewInit(): void {
        if (this.canLazyLoad()) {
            /* https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/ */
            this.observer = new IntersectionObserver(entries => {
                entries.forEach(({isIntersecting}) => {
                    if (isIntersecting) {
                        this.loadImage();
                        this.observer.unobserve(this.element.nativeElement);
                    }
                });
            });
            this.observer.observe(this.element.nativeElement);
        } else {
            this.loadImage();
        }
    }

    private loadImage(): void {
        this.srcAttribute = this.src;
    }

    private canLazyLoad(): boolean {
        return this.window && this.window.hasOwnProperty('IntersectionObserver');
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

}
