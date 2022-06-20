import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { Moeda } from 'src/app/models/moeda';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  constructor(private http: HttpClient) { }


  buscarPorPeriodo(startDate: any, endDate: any): Observable<any> {
    let params = new HttpParams();
    params = params.set('startDate', startDate);
    params = params.set('endDate', endDate);
    return this.http.get<any>(API_CONFIG.baseUrl,  { params} )
  }
}
