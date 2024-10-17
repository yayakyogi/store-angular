import { Component, Input } from '@angular/core';
import { UiButton } from '../../ui/ui-button/ui-button.component';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [UiButton],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionCard {
  @Input() image!: string;
  @Input() productTitle!: string;
  @Input() user!: string;
  @Input() date!: string;
}
