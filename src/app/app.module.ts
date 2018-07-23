import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemNumberComponent } from './item-number/item-number.component';
import { NumbersGridComponent } from './numbers-grid/numbers-grid.component';
import { GenerateFormComponent } from './generate-form/generate-form.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemNumberComponent,
    NumbersGridComponent,
    GenerateFormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
