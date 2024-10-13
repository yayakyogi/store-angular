import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BreadcrumbComponent as XngBreadcrumb,
  BreadcrumbItemDirective,
} from 'xng-breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, XngBreadcrumb, BreadcrumbItemDirective],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {}
