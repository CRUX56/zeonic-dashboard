import { Component } from '@angular/core';
import { HeaderBar } from '../../global/header-bar/header-bar';
import { NavBar } from '../../global/nav-bar/nav-bar';
import { TotalSales } from '../../components/total-sales/total-sales';
import { TotalOrders } from '../../components/total-orders/total-orders';
import { TotalCustomers } from '../../components/total-customers/total-customers';
import { Impressions } from '../../components/impressions/impressions';
import { RecentOrdersTable } from '../../components/recent-orders-table/recent-orders-table';
import { TeamMembersListTable } from '../../components/team-members-list-table/team-members-list-table';

@Component({
  selector: 'app-main-dashboard',
  imports: [
    HeaderBar,
    NavBar,
    TotalSales,
    TotalOrders,
    TotalCustomers,
    Impressions,
    RecentOrdersTable,
    TeamMembersListTable,
  ],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.scss',
})
export class MainDashboard {}
