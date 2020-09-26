import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakFdComponent } from './pages/break-fd/break-fd.component';
import { CreateFdComponent } from './pages/create-fd/create-fd.component';
import { HomeComponent } from './pages/home/home.component';
import { InterestTableComponent } from './pages/interest-table/interest-table.component';
import { MyFixedDepositsComponent } from './pages/transactions/my-fixed-deposits/my-fixed-deposits.component';
import { TransactionDetailsComponent } from './pages/transactions/transaction-details/transaction-details.component';
import { TransactionHistoryComponent } from './pages/transactions/transaction-history/transaction-history.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

const routes: Routes = [
  {path:"",component:HomeComponent, children:[
    {path : "",component:MyFixedDepositsComponent},
    {path : "my-fd-desposit",component:MyFixedDepositsComponent},
    {path : "transaction-history",component:TransactionHistoryComponent},
  ]},
  {path : "create-fd",component:CreateFdComponent},
  {path : "break-fd",component:BreakFdComponent},
  {path : "interest-table",component:InterestTableComponent},
  {path : "transaction-details",component:TransactionDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
