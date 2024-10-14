import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { UiButton } from '../../shared/ui/ui-button/ui-button.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [BreadcrumbComponent, UiButton, MatDivider],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductPage {
  productImages: Array<string> = [
    'pic-1.jpg',
    'pic-2.png',
    'pic-3.jpg',
    'pic-4.jpg',
    'pic-5.png',
  ];
}
