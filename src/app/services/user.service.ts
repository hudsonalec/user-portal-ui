import { User } from './../models/user';
import { url } from './../../environments/environment'; // imports the URL that points to localhost:5000/api
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


// This UserService is entirely responsible for making HTTP requests to the UserController

const userUrl = url + '/users'; // now the url is pointing to http://localhost:5000/api/users/

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // these are the headers that we append to every request to the server
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  // inject ANOTHER service into this service
  // first add HttpClient Module to your app.module.ts file
  constructor(private http: HttpClient) { }

  deleteUserById(id: number) : Observable<any> { // Observable help you handle data fetched asynchronously

    return this.http.delete(`${userUrl}/${id}`)
      .pipe(catchError(this.handleError));

  }

  findUserById(id: number) : Observable<User> {

    console.log(`User entered id: ${id}`);

    // make a GET request to http://localhost:5000/api/users/{id}
    return this.http.get<User>(`${userUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError) // we defined this callback function at the bottom of this service class
      );

  }

  findAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(userUrl, this.httpOptions)
      .pipe(catchError(this.handleError));

  }

  // POST request to our Spring Boot API
  registerUser(user: User): Observable<User> {
    //3 params: url, object in request body, options (headers)
    return this.http.post<User>(`${userUrl}/add`, user, this.httpOptions)
      .pipe(catchError(this.handleError)); // pass a callback function if something goes wrong
      // catchError comes from rxjs

  }

  // this method is private so we can call it in the case that something goes wrong
  private handleError(httpError: HttpErrorResponse) {

    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occured: ', httpError.error.message)
    } else {
      console.error(`
      Backend returned code ${httpError.status}
      body was: ${httpError.error}`)
    }

    return throwError(()=> Error('Something redally bad happened, please try again later'))
  }

}
