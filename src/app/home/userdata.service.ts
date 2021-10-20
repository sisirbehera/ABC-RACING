import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  user: () => '/users'
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  /* getUsers(): Observable<User[]> {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load joke :-('))
      );
  } */


  getUsers() {
    const uri = routes.user();
    return this.httpClient
      .get<User[]>(uri)
      .pipe(
        map(responseData => {
          console.log('response', responseData);
          return responseData;
      }),
        catchError(() => of('Error, Could not load Users :-('))
      )
  }

  /* getUsers(): Observable<User[]> {
    return this.httpClient
      .get(routes.user())
      .pipe(
        map((data: User[]) => {
          console.log('User List', data);
        }),
        catchError(() => of('Error, could not load user'))
      );
  } */

}
