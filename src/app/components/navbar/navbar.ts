import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  heightClass = 'navbar-large';

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 10) {
      this.heightClass = 'navbar-small';
    } else {
      this.heightClass = 'navbar-large';
    }
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToPortofolio() {
    this.router.navigate(['/portofolio']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
} 