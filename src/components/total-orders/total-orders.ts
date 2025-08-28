import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { DashboardComponent } from '../../global/services/component';
import { totalOrderResponse } from './response-model';

@Component({
  selector: 'app-total-orders',
  imports: [MatCardModule, MatIconModule, DecimalPipe, PercentPipe],
  templateUrl: './total-orders.html',
  styleUrl: './total-orders.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalOrders implements OnInit, OnDestroy {
  totalOrderValue: number = 0;
  totalOrderPercentageNew: number = 0;
  totalOrderTrend: string = '';

  private widgetComponent: DashboardComponent = inject(DashboardComponent);
  private _snackBar: MatSnackBar = inject(MatSnackBar);
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.getValue();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getValue(): void {
    this.subscription = this.widgetComponent.getDashboardData().subscribe({
      next: (response: totalOrderResponse) => {
        if (response) {
          const totalOrders = response['total-orders'];
          this.totalOrderValue = totalOrders.value;
          this.totalOrderPercentageNew = totalOrders.percentageNew;
          this.totalOrderTrend = totalOrders.trend;
        } else {
          this.totalOrderValue = 0;
          this.totalOrderPercentageNew = 0;
          this.totalOrderTrend = '';
        }
      },
      error: (err: any) => {
        this.openSnackBar(err.value, 'Close');
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
