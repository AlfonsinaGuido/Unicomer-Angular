import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { BalanceComponent } from './components/balance/balance.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { DetailComponent } from './components/detail/detail.component';
import { PointsPipe } from './pipes/points.pipe';
import { MyDateTransactionPipe } from './pipes/my-date-transaction.pipe';
import { MyDateDetailPipe } from './pipes/my-date-detail.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    CardComponent,
    BalanceComponent,
    TransactionComponent,
    DetailComponent,
    PointsPipe,
    MyDateTransactionPipe,
    MyDateDetailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
