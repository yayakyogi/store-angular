import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
})
export class UiButton {
  @Input() title!: string;
  @Input() type?: 'basic' | 'flat' | 'stroked' = 'basic';
}
