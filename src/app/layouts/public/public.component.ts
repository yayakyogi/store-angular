import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiButton } from '../../shared/ui/ui-button/ui-button.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet, UiButton, RouterLink],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicLayout {}
