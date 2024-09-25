import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoreServicesComponent } from './more-services/more-services.component';
import { FormComponent } from './form/form.component';
import { PowerfulComponent } from './powerful/powerful.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { HeaderHoverBlockComponent } from './header-hover-block/header-hover-block.component';
import { HowGetCardComponent } from './how-get-card/how-get-card.component';
import { ListItemComponent } from './how-get-card/list-item/list-item.component';
import { NepaliDatepickerModule } from 'nepali-datepicker-angular';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreServicesComponent,
    FormComponent,
    PowerfulComponent,
    FooterComponent,
    HeaderComponent,
    CounterComponent,
    HeaderHoverBlockComponent,
    HowGetCardComponent,
    ListItemComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NepaliDatepickerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
