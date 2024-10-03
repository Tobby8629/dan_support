import { Component } from '@angular/core';
import image from '../../../assets/images/image';
import Icon from '../../../assets/Icons/Icon';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  images = image;
  icons = Icon
  links = [
    {link: "", name: "Home"},
    {link: "about", name: "About"},
    {link: "service", name: "Service"},
    {link: "contact", name: "Contact"},
    {link: "career", name: "Career"},
    {link: "blogs", name: "Blogs"},
  ]
  menu = false
  openmenu = () => this.menu = true;
  closemenu = () => this.menu = false;
}
