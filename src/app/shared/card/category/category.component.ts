import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryCard {
  @Input() title!: string;
}
