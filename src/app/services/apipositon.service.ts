import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootModel } from '../models/root.model';

@Injectable({
  providedIn: 'root'
})
export class ApipositonService {

  constructor(private http:HttpClient){}
  getjson():Observable<RootModel>{
    let url:string = "https://localhost:7208/api/HrPositions";
    return this.http.get<RootModel>(url);
  }
}
