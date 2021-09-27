import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhonesComponent } from './components/phones/phones.component';
import { FormPhoneComponent } from './components/forms/form-phone/form-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhonesComponent,
    FormPhoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
