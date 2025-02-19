import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootModel } from '../models/root.model';

@Injectable({
  providedIn: 'root'
})
export class ApidepartmentService {

  constructor(private http: HttpClient) { }

  getjson1(): Observable<RootModel> {
    let url: string = "https://localhost:7208/api/HrDepartments";
    return this.http.get<RootModel>(url);
  }

}
