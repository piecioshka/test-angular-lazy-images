import { Directive, ElementRef } from "@angular/core";
import { intersectionHelper } from "./intersection.helper";

@Directive({
  selector: "[appLazyLoadImage]",
})
export class LazyLoadImageDirective {
  constructor(private el: ElementRef) {
    this.setupLazyLoading();
  }

  private setupLazyLoading() {
    const $el = this.el.nativeElement;
    intersectionHelper($el);
  }
}
