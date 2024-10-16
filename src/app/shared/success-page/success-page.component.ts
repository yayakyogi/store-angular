import { Component, Input } from '@angular/core';
import { UiButton } from '../ui/ui-button/ui-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [UiButton, RouterLink],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.scss',
})
export class SuccessPageComponent {
  @Input() title!: string;
  @Input() description!: string;
}
