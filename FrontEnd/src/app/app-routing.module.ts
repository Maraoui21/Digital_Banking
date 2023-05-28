import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustumersTableComponent} from "./components/custumers-table/custumers-table.component";
import {AccountsTableComponent} from "./components/accounts-table/accounts-table.component";
import {OperationsTableComponent} from "./components/operations-table/operations-table.component";

const routes: Routes = [
  {path:"",component:CustumersTableComponent},
  {path:"accounts",component:AccountsTableComponent},
  {path:"operations",component:OperationsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
