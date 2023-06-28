import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menus = [
    {
      name: 'Main',
      buttons: [
        {
          buttonName:'Home',
          buttonIcon: '../../../../assets/sidebar/Home-icon.svg',
          routerHref: '/'
        }, 
        {
          buttonName: 'Exercises',
          buttonIcon: '../../../../assets/sidebar/Exercise-icon.svg',
          routerHref: '/'
        },
        {
          buttonName: 'About us',
          buttonIcon: '../../../../assets/sidebar/About us-icon.svg',
          routerHref: '/about'
        }
      ]
    },
    {
      name: 'Secondary',
      buttons: [       
        {
          buttonName: 'Rules',
          buttonIcon: '../../../../assets/sidebar/Rules-icon.svg',
          routerHref: '/about'
        },
        {
          buttonName: 'Add term',
          buttonIcon: '../../../../assets/sidebar/Add term-icon.svg',
          routerHref: '/about'
        }
      ]
    },
    {
      name: 'Contacts',
      buttons: [
        {
          buttonName:'Istagram',
          buttonIcon: '../../../../assets/sidebar/Instagram-icon.svg' ,
          routerHref: '/about'
        }, 
        {
          buttonName: 'Youtube',
          buttonIcon: '../../../../assets/sidebar/Youtube-icon.svg',
          routerHref: '/about'
        },
        {
          buttonName: 'Contact us',
          buttonIcon: '../../../../assets/sidebar/Contact us-icon.svg',
          routerHref: '/about'
        }
      ]
    },
  ]
  idiom: string = 'walk on air'



}
