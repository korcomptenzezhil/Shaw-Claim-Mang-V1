import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerTypeRequestPayload, CustomerTypeResponseModel } from '../interfaces/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/api/getCustomerType';

  constructor(private http: HttpClient) { }

  getCustomerType(payload: CustomerTypeRequestPayload): Observable<CustomerTypeResponseModel> {
    return this.http.post<CustomerTypeResponseModel>(this.apiUrl, payload);
  }

}
