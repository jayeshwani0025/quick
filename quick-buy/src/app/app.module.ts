import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './layout/product/product.module';
import { UserModule } from './layout/users/user.module';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { CommonMiniHeaderComponent } from './layout/components/header/common-mini-header/common-mini-header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommonMiniHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
