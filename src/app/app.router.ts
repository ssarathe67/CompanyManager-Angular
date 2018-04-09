import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CompanyListingComponent} from './components/company-listing/company-listing.component';
import {AddCompanyComponent} from './components/add-company/add-company.component';
import {AboutUsComponent} from './components/about-us/about-us.component';

export const router: Routes = [
  {path: '', redirectTo: 'listAllCompanies', pathMatch: 'full'},
  {path: 'about', component: AboutUsComponent},
  {path: 'listAllCompanies', component: CompanyListingComponent},
  {path: 'addNewComoany', component: AddCompanyComponent},
  {path: 'updateCompany/:id', component: AddCompanyComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

