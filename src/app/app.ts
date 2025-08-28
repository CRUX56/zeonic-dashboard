import { Component, signal } from '@angular/core';
import { MainDashboard } from '../features/main-dashboard/main-dashboard';

@Component({
  selector: 'app-root',
  imports: [MainDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('zeonic-dashboard');
}
