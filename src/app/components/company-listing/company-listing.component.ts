import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from './company-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.css']
})
export class CompanyListingComponent implements OnInit {

  constructor(private companyServiceService: CompanyServiceService, private router: Router) { }
  companyResponse: any;
  editCompany(row){
    console.log(row);
    this.router.navigate(['/updateCompany/' + row.companyId]);
  }
  ngOnInit(){
      this.companyServiceService.getAllCompanies().subscribe(
        (data) => {
          this.companyResponse = data;
        }
      );
    }
  
  }
