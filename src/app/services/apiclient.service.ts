import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  constructor(private http:HttpClient) { }
  
  getjson(): void{
    
  }
}
