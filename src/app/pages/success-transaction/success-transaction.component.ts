import { Component } from '@angular/core';
import { SuccessPageComponent } from '../../shared/success-page/success-page.component';

@Component({
  selector: 'app-success-transaction',
  standalone: true,
  imports: [SuccessPageComponent],
  templateUrl: './success-transaction.component.html',
  styleUrl: './success-transaction.component.scss',
})
export class SuccessTransactionPage {}
