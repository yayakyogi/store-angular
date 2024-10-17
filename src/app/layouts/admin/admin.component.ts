import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { UiButton } from '../../shared/ui/ui-button/ui-button.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Menu {
  label: string;
  url: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, UiButton, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminLayout {
  url: string = window.location.pathname;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('url ', this.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.url;
      });
  }

  menu: Menu[] = [
    {
      label: 'Dashboard',
      url: '/admin',
    },
    {
      label: 'My Products',
      url: '/admin/products',
    },
    {
      label: 'Transactions',
      url: '/admin/transactions',
    },
    {
      label: 'Store Settings',
      url: '/admin/settings',
    },
    {
      label: 'My Accounts',
      url: '/admin/accounts',
    },
  ];
}
