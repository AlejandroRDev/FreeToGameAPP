import { Component } from '@angular/core';
import { FooterInterface, NavigatorInterface } from './core/models/Core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FTPBibliotheque-app';
  public navigator: NavigatorInterface[] = [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "Games",
      link: "/games"
    },
    {
      name: "Register",
      link: "/register"
    },
    {
      name: "About",
      link: "/about"
    }
  ];
  public footer: FooterInterface = {
    creator: 'Alejandro Rueda', 
    image: {
      src:"../assets/images/GitHub_Logo_White.png",
      alt:"name"
    },
    github: 'https://github.com/AlejandroRDev'
    }
}
