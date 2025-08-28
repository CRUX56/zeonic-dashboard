import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardDataModel } from '../../components/constants/models';
import DashboardData from '../../components/dashboard-data.json';

@Injectable({
  providedIn: 'root',
})
export class DashboardComponent {
  constructor() {}
  getDashboardData(): Observable<DashboardDataModel> | any {
    return DashboardData;
  }
}
