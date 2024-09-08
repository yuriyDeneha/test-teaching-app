import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-more-services',
  templateUrl: './more-services.component.html',
  styleUrls: ['./more-services.component.scss']
})
export class MoreServicesComponent {


  pageObject = {
    header: 'Services',
    list: [
      'Saas',
      'Profesional services',
      'Construction',
      'Other',
      'Saas 2',
      'Profesional services 3',
      'Construction 4',
      'Other 6',
    ],
    footer: 'Contact us for more information',
    age: 25,
  };


  socialMedia = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: 'facebook'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: 'twitter'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: 'instagram'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      icon: 'linkedin'
    }
  ]
}
