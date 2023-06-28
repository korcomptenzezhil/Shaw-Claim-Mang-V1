import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './mockApis/login.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSideNavCollapsed: boolean = true;
  screenWidth!: number;
  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.getIsLoggedIn();

    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onToggleSideNav(collapsed: boolean): void {
    this.isSideNavCollapsed = collapsed;
  }
}
