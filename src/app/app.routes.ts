import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './components/about/about';
import { Gellery } from './components/gellery/gellery';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  { path: 'portofolio', component: Gellery, title: 'Portofolio' },
  { path: 'contact', component: Contact, title: 'Contact' },
];
