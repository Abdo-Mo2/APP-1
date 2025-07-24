import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { Home } from "./home/home";
import { About } from "./components/about/about";
import { Gellery } from "./components/gellery/gellery";
import { Contact } from "./components/contact/contact";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { End } from "./components/end/end";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Gellery, Contact, Navbar, Footer, End],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment-1');

  constructor(private router: Router, private titleService: Title) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.routerState.snapshot.root;
      let route = currentRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      const pageTitle = route.data['title'] || 'Assignment-1';
      this.titleService.setTitle(pageTitle);
    });
  }
}
