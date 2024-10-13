import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductCard {
  @Input() title!: string;
  @Input() price!: number;
  @Input() image?: string = 'https://dummyjson.com/image/200';
}
