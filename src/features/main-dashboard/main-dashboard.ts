import { Component } from '@angular/core';
import { HeaderBar } from '../../global/header-bar/header-bar';
import { NavBar } from '../../global/nav-bar/nav-bar';

@Component({
  selector: 'app-main-dashboard',
  imports: [HeaderBar, NavBar],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.scss',
})
export class MainDashboard {}
