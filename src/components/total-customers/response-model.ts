export interface TotalCustomerResponse {
  'total-customers': {
    value: number;
    newCustomers: number;
    returningCustomers: number;
    percentageNew: number;
  };
}
