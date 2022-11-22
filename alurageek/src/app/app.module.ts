import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ProductComponent } from './products/product/product.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ProductComponent, NewProductComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
