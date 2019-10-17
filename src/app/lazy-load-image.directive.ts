import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appLazyLoadImage]'
})
export class LazyLoadImageDirective {

    constructor(
        private el: ElementRef
    ) {
        this.applyLazyLoading();
    }

    applyLazyLoading() {
        const $el = this.el.nativeElement;
        LazyLoadImageDirective.lazyLoadImage($el);
    }

    private static lazyLoadImage($el: any) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    $el.src = $el.dataset.src;
                    observer.disconnect();
                }
            });
        });
        observer.observe($el);
    }
}
