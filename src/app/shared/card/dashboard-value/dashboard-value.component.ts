import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-value',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-value.component.html',
  styleUrl: './dashboard-value.component.scss',
})
export class DashboardValueComponent {
  @Input() title!: string;
  @Input() value!: string;
}
