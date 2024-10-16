import { Component } from '@angular/core';
import { UiButton } from '../../shared/ui/ui-button/ui-button.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [UiButton, BreadcrumbComponent, FormsModule, MatInputModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss',
})
export class CartPage {}
