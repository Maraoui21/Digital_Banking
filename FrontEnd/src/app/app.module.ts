import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustumersTableComponent } from './components/custumers-table/custumers-table.component';
import { OperationsTableComponent } from './components/operations-table/operations-table.component';
import { AccountsTableComponent } from './components/accounts-table/accounts-table.component';
import { CustomerModalComponent } from './components/modals/customer-modal/customer-modal.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustumersTableComponent,
    OperationsTableComponent,
    AccountsTableComponent,
    CustomerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
