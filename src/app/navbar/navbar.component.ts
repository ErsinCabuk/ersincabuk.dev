import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  pages: {link: string, title: string}[] = [
    {
      link: "/",
      title: "Home"
    },
    {
      link: "/about",
      title: "About"
    },
    {
      link: "/projects",
      title: "Projects"
    },
    {
      link: "/blog",
      title: "Blog"
    }
  ] 
}