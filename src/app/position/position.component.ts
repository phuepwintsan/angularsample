import { Component, OnInit } from '@angular/core';
import { ApipositonService } from '../services/apipositon.service';
import { RootModel } from '../models/root.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-position',
  imports: [CommonModule],
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss',
})
export class PositionComponent implements OnInit {
  position: any[] = [];
  constructor(private apipositionservice: ApipositonService) {}

  ngOnInit(): void {
    this.apipositionservice.getjson().subscribe((res) => {
      let result = res as RootModel;
      this.position = result.data;
    });
  }
}
