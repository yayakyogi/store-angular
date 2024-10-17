import { Component } from '@angular/core';
import { DashboardValueComponent } from '../../../shared/card/dashboard-value/dashboard-value.component';
import { TransactionCard } from '../../../shared/card/transaction/transaction.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardValueComponent, TransactionCard],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardPage {}
