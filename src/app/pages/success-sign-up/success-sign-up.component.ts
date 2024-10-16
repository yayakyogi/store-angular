import { Component } from '@angular/core';
import { UiButton } from '../../shared/ui/ui-button/ui-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success-sign-up',
  standalone: true,
  imports: [UiButton, RouterLink],
  templateUrl: './success-sign-up.component.html',
  styleUrl: './success-sign-up.component.scss',
})
export class SuccessSignUpPage {}
