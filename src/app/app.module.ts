import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app/app.component";
import { SkullComponent } from "./skull/skull.component";
import { LazyLoadImageDirective } from "./lazy-load-image/lazy-load-image.directive";

@NgModule({
  declarations: [AppComponent, SkullComponent, LazyLoadImageDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
