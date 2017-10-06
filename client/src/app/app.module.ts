import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Route,RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule } from "@angular/forms";
import { ContactsService } from "./services/contacts.service";

import { router } from './router'
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    router
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
