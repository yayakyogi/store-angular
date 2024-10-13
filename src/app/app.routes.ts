import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { PublicLayout } from './layouts/public/public.component';
import { DetailProductPage } from './pages/detail-product/detail-product.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    data: { breadcrumb: 'home' },
    children: [
      { path: '', component: HomePage, data: { breadcrumb: '' } },
      {
        path: ':id',
        component: DetailProductPage,
        data: { breadcrumb: 'product detail' },
      },
    ],
  },
];
