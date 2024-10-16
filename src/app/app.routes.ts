import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { PublicLayout } from './layouts/public/public.component';
import { DetailProductPage } from './pages/detail-product/detail-product.component';
import { SignInPage } from './pages/sign-in/sign-in.component';
import { SignUpPage } from './pages/sign-up/sign-up.component';
import { SuccessSignUpPage } from './pages/success-sign-up/success-sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    data: { breadcrumb: 'home' },
    children: [
      { path: '', component: HomePage, data: { breadcrumb: '' } },
      {
        path: 'sign-in',
        component: SignInPage,
      },
      {
        path: 'sign-up',
        component: SignUpPage,
      },
      {
        path: 'success-sign-up',
        component: SuccessSignUpPage,
      },
      {
        path: ':id',
        component: DetailProductPage,
        data: { breadcrumb: 'product detail' },
      },
    ],
  },
];
