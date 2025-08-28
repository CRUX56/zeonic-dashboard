import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { DashboardComponent } from '../../global/services/component';
import { TotalSalesResponse } from './response-model';

@Component({
  selector: 'app-total-sales',
  imports: [MatCardModule, DecimalPipe, MatIconModule],
  templateUrl: './total-sales.html',
  styleUrl: './total-sales.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalSales implements OnInit, OnDestroy {
  totalSalesValue: number = 0;
  totalSalesCurrency: string = '';

  private widgetComponent: DashboardComponent = inject(DashboardComponent);
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.initalComponentData();
  }

  ngOnDestroy(): void {}

  initalComponentData() {
    this._fetchTotalSalesData();
  }

  private _fetchTotalSalesData(): void {
    this.widgetComponent.getDashboardData().subscribe({
      next: (response: TotalSalesResponse) => {
        if (response) {
          const totalSalesData = response['total-sales'];
          this.totalSalesValue = totalSalesData.value;
          this.totalSalesCurrency = totalSalesData.currency;
        } else {
          this.totalSalesValue = 0;
          this.totalSalesCurrency = '';
        }
      },
      error: (err: any) => {
        this.openSnackBar(err.value, 'Close');
      },
    });
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
