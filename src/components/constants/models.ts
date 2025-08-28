export interface DashboardDataModel {
  'total-orders': {
    value: number;
    percentageNew: number;
    trend: string;
  };
  'total-sales': {
    value: number;
    currency: string;
  };
  'total-customers': {
    value: number;
    'new-customers': number;
    'returning-customers': number;
    'percentage-new': number;
  };
  'team-members-table-list': [
    {
      name: string;
      role: string;
      status: string;
      avatar: string;
    }
  ];
  'recent-invoices-table-list': [
    {
      'invoice-number': string;
      'billing-name': string;
      date: string;
      total: string;
      status: string;
    }
  ];
}
