import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { DashboardComponent } from '../../global/services/component';
import { TotalCustomerResponse } from './response-model';

@Component({
  selector: 'app-total-customers',
  imports: [MatCardModule, MatIconModule, DecimalPipe, PercentPipe],
  templateUrl: './total-customers.html',
  styleUrl: './total-customers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalCustomers implements OnInit, OnDestroy {
  totalCustomers: number = 0;
  newCustomers: number = 0;
  returningCustomers: number = 0;
  percentageNew: number = 0;

  private widgetComponent: DashboardComponent = Inject(DashboardComponent);
  private _snackBar: MatSnackBar = Inject(MatSnackBar);
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.totalCustomersData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  totalCustomersData(): void {
    this._fetchTotalCustomersData();
  }

  private _fetchTotalCustomersData(): void {
    this.subscription = this.widgetComponent.getDashboardData().subscribe({
      next: (response: TotalCustomerResponse) => {
        if (response) {
          const totalCustomersData = response['total-customers'];
          this.totalCustomers = totalCustomersData.value;
          this.newCustomers = totalCustomersData.newCustomers;
          this.returningCustomers = totalCustomersData.returningCustomers;
          this.percentageNew = totalCustomersData.percentageNew;
        } else {
          this._snackBar.open('No data available', 'Close', { duration: 3000 });
        }
      },
      error: (err: any) => {},
    });
  }
}
