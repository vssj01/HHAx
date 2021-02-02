import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WorkslistService {
  constructor(public http: HttpClient) {}

  getWorksListData() {
    return this.http.get('http://localhost:3000/workslist');
  }
}
