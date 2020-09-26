import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { MyFixedDepositsComponent } from './pages/transactions/my-fixed-deposits/my-fixed-deposits.component';
import { TransactionHistoryComponent } from './pages/transactions/transaction-history/transaction-history.component';
import { TransactionDetailsComponent } from './pages/transactions/transaction-details/transaction-details.component';
import { CreateFdComponent } from './pages/create-fd/create-fd.component';
import { BreakFdComponent } from './pages/break-fd/break-fd.component';
import { HeaderComponent } from './components/header/header.component';
import { InterestTableComponent } from './pages/interest-table/interest-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionsComponent,
    MyFixedDepositsComponent,
    TransactionHistoryComponent,
    TransactionDetailsComponent,
    CreateFdComponent,
    BreakFdComponent,
    HeaderComponent,
    InterestTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
