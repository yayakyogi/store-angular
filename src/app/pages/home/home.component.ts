import { Component } from '@angular/core';
import { CategoryCard } from '../../shared/card/category/category.component';
import { ProductCard } from '../../shared/card/product/product.component';
import { UiButton } from '../../shared/ui/ui-button/ui-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCard, ProductCard, UiButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePage {}
