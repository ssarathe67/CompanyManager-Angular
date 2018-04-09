import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Company} from './company';
import {CompanyServiceService} from '../company-listing/company-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public company: Company;
  ngOnInit() {}

  constructor(private companyServiceService: CompanyServiceService, private router: Router, private route: ActivatedRoute) {
    this.company = {
      companyId: undefined,
      companyName: undefined,
      companyPhoneNo: undefined,
      companyCEO: undefined,
      foundedYear: undefined,
      isActive: false,
      status: undefined,
    };
    this.route.params.subscribe( params => {
      if (params.id){
        this.companyServiceService.getCompany(params.id).subscribe(
          (response) => {
             this.company = response;
          }
        );
      }
    });
  }

  addCompany = function(data, isValid) {
    if (isValid) {
      this.company.companyName = data.companyName;
      this.company.companyPhoneNo = data.companyPhoneNo;
      this.company.companyCEO = data.companyCEO;
      this.company.foundedYear = data.foundedYear;
      this.companyServiceService.saveCompany(this.company).subscribe(
        (response) => {
          this.router.navigate(['/listAllCompanies']);
        }
      );
    }

  };
}
