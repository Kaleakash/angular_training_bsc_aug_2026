import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    StructureDirectiveComponent,
    AttributeDirectiveComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
