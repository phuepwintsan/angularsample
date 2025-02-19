import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentComponent } from './department/department.component';
import { PositionComponent } from './position/position.component';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'position', component: PositionComponent },
  { path: 'button', component: ButtonComponent },
];
