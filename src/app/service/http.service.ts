import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(
    private http:  HttpClient
  ) { }

  public respAdress(adress: string): Observable<any> {
    console.log(adress);
    return this
      .http
      .get(adress);
  }

  // public respAdress(adress: string) {
  //   console.log( adress );
  // }

}
