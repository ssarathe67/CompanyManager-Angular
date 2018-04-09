import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyServiceService {

  constructor(private httpClient: HttpClient) {}



  getAllCompanies() {
    return this.httpClient.get('http://localhost:8080/project/company/getAllCompanies').map(
      (response) => response
    );
  }

  saveCompany(_company) {
    let body = JSON.stringify(_company);
    return this.httpClient.post('http://localhost:8080/project/company/saveCompany', _company).map((response: Response) => response);
  }

  getCompany(_companyId) {
    return this.httpClient.post('http://localhost:8080/project/company/getCompany', _companyId).map((response: Response) => response);
  }


}
