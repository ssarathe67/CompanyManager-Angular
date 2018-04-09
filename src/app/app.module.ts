import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './app.router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CompanyListingComponent} from './components/company-listing/company-listing.component';
import {CompanyServiceService} from './components/company-listing/company-service.service';
import {AddCompanyComponent} from './components/add-company/add-company.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {OnlyNumberDirective} from './directives/onlyNumber/only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListingComponent,
    AddCompanyComponent,
    AboutUsComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    HttpClientModule,
    routes,
    FormsModule
  ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
