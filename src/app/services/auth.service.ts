import { url } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // these will be sent in the post request
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  loginUrl = url + '/login'; // to trigger the controller method at http://localhost:5000/api/login

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // make the post request to http://localhost:5000/api/login

    // payload = info about the user that we're authenticated (claims)
    const payload = { username, password};

    // send the POST request to the url with the payload, and additional options
    return this.http.post<any>(this.loginUrl, payload, { observe: 'response'});
  }

}
