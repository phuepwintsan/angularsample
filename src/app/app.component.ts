import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angularsample';
  a: string = '1';
  b: number = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.b = this.getValue();
    }, 1000);
  }

  getValue(): number {
    return 100;
  }
}
