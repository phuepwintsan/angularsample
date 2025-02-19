import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../services/apiclient.service';
import { RootModel } from '../models/root.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  states: any[] = [];
  
  constructor(private apiservice: ApiclientService) {

  }

  ngOnInit(): void {
    this.apiservice.getjson1().subscribe((res)=>{
      let result = res as RootModel;
      this.states = result.data;
    });

  }
}
