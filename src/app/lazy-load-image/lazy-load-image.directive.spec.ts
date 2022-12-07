import { LazyLoadImageDirective } from "./lazy-load-image.directive";

describe("LazyLoadImageDirective", () => {
  let directive: LazyLoadImageDirective;

  beforeEach(() => {
    const elementRefStub = jasmine.createSpyObj("ElementRef", [
      "nativeElement",
    ]);
    directive = new LazyLoadImageDirective(elementRefStub);
  });

  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });
});
