import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { UiButton } from '../../shared/ui/ui-button/ui-button.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet, UiButton, RouterLink],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicLayout implements OnInit {
  url: string = window.location.pathname;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.url;
      });
  }
}
