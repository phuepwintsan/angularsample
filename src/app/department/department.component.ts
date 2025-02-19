import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../services/apiclient.service';
import { RootModel } from '../models/root.model';
import { ApidepartmentService } from '../services/apidepartment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {

  departments: any[] = [];

  constructor(private apidepartmentservice: ApidepartmentService) {

  }

  ngOnInit(): void {
    this.apidepartmentservice.getjson1().subscribe((res) => {
      let result = res as RootModel;
      this.departments = result.data;
    });
  }

}
