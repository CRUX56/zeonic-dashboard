import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-bar',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, ReactiveFormsModule],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.scss',
})
export class HeaderBar implements OnInit {
  headerBarSearchForm: FormControl = new FormControl('');

  constructor() {
    this.initalizeComponent();
  }

  ngOnInit(): void {}

  initalizeComponent(): void {
    this.headerBarSearchForm = new FormControl('header-search');
  }
}
