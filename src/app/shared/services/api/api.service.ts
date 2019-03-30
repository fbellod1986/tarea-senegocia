import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = environment.url;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {

    const headers =  new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return headers;

  }

  post(body: any) {
    const headers = this.getHeaders();
    const url = this.api;
    return this.http.post(url, body , {headers} );
  }

  get(query: string) {
    const headers = this.getHeaders();
    const url = this.api + query;
    return this.http.get(url , {headers} );
  }


}
