import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from './school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl = "http://localhost:8080/schools";
  private getUrl = this.baseUrl + "/all";
  private addUrl = this.baseUrl + "/add";
  private putUrl = this.baseUrl + "/update";
  private deleteUrl = this.baseUrl + "/delete";

  constructor(private httpClient: HttpClient) { }

  getSchoolList(): Observable<School[]>{
    return this.httpClient.get<School[]>(`${this.getUrl}`);
  }

  addSchool(school: School): Observable<Object>{
    return this.httpClient.post(`${this.addUrl}`, school);
  }

  getSchoolById(id: string):Observable<School>{
    return this.httpClient.get<School>(`${this.baseUrl}/${id}`);
  }

  updateSchool(id: string, school : School):Observable<Object>{
    return this.httpClient.put(`${this.putUrl}/${id}`, school);
  }

  deleteSchool(id: string):Observable<Object>{
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }
}
