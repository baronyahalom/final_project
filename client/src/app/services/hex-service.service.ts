import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'api/hex';
@Injectable({
  providedIn: 'root'
})
export class HexServiceService {

  constructor(private http: HttpClient) { }

  create(data) {
    console.log('here I am');
    console.log(data);
    return this.http.post(baseUrl + '/users', data);
  }

  get(userID){
    console.log("is here:" + userID);
    return this.http.get(baseUrl + '/users' + `/${userID}`);

  }

  saveOpQ(data) {
    console.log('here I am');
    console.log(data);
    return this.http.post(baseUrl + '/opStrategy', data);
  }

  savepart1(data){
    console.log('here I am');
    console.log(data);
    return this.http.post(baseUrl + '/part1', data);
  }

}
