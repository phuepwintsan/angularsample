import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { Rating } from 'primeng/rating';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-button',
  imports: [
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    Rating,
  ],
  templateUrl: './button.component.html',
  standalone: true,
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  value!: number;
}
