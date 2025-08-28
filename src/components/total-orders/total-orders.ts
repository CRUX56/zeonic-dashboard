import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from '../../global/services/component';
import { totalOrderResponse } from './response-model';

@Component({
  selector: 'app-total-orders',
  imports: [MatCardModule],
  templateUrl: './total-orders.html',
  styleUrl: './total-orders.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalOrders implements OnInit {
  totalOrderValue: number = 0;
  totalOrderPercentageNew: number = 0;
  totalOrderTrend: string = '';

  private widgetComponent: DashboardComponent = inject(DashboardComponent);
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.getValue();
    console.log(this.totalOrderValue);
  }

  getValue(): void {
    this.widgetComponent.getDashboardData().subscribe({
      next: (response: totalOrderResponse) => {
        if (response) {
          this.totalOrderValue = response.value;
          this.totalOrderPercentageNew = response.percentageNew;
          this.totalOrderTrend = response.trend;
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
