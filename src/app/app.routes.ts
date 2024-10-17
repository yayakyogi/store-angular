import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { PublicLayout } from './layouts/public/public.component';
import { DetailProductPage } from './pages/detail-product/detail-product.component';
import { SignInPage } from './pages/sign-in/sign-in.component';
import { SignUpPage } from './pages/sign-up/sign-up.component';
import { SuccessSignUpPage } from './pages/success-sign-up/success-sign-up.component';
import { CartPage } from './pages/carts/carts.component';
import { SuccessTransactionPage } from './pages/success-transaction/success-transaction.component';
import { AdminLayout } from './layouts/admin/admin.component';
import { DashboardPage } from './pages/admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayout,
    data: { breadrumb: 'Admin' },
    children: [
      { path: '', component: DashboardPage, data: { breadcrumb: 'Dashboard' } },
    ],
  },
  {
    path: '',
    component: PublicLayout,
    data: { breadcrumb: 'home' },
    children: [
      { path: '', component: HomePage, data: { breadcrumb: '' } },
      {
        path: 'sign-in',
        component: SignInPage,
        data: { breadrumb: 'sing-in' },
      },
      {
        path: 'sign-up',
        component: SignUpPage,
        data: { breadrumb: 'sign-up' },
      },
      {
        path: 'carts',
        component: CartPage,
        data: { breadrumb: 'carts' },
      },
      {
        path: 'success-sign-up',
        component: SuccessSignUpPage,
        data: { breadrumb: 'success sign up' },
      },
      {
        path: 'success-transaction',
        component: SuccessTransactionPage,
        data: { breadrumb: 'success transaction' },
      },
      {
        path: ':id',
        component: DetailProductPage,
        data: { breadcrumb: 'product detail' },
      },
    ],
  },
];
