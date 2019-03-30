import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private rootUrl = environment.url + 'usuario/Authorized?data=';

  constructor(private http: HttpClient, private route: Router) { }

  private getHeaders(): HttpHeaders {
    const headers =  new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return headers;
  }

  login(username: string, password: string) {
    const headers = this.getHeaders();
    const url = this.rootUrl + `{ "username": '${username}', "password": '${password}' }`;
    return this.http.get(url , {headers} );
  }


}
