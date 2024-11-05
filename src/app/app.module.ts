import { importProvidersFrom, NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { UniversitiesComponent } from './universities/universities.component';
import { HttpClientModule } from '@angular/common/http';
import { MarginPaddingComponent } from './margin-padding/margin-padding.component';
import { FormulaComponent } from './formula/formula.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreServicesComponent,
    FormComponent,
    PowerfulComponent,
    FooterComponent,
    CounterComponent,
    HowGetCardComponent,
    ListItemComponent,
    MarginPaddingComponent,
    FormulaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NepaliDatepickerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    importProvidersFrom(MatNativeDateModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
