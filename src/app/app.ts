import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDashboard } from '../features/main-dashboard/main-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('zeonic-dashboard');
}
