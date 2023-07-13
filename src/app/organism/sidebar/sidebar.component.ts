import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menus = [
    {
      name: 'Vocabulary',
      buttons: [
        {
          buttonName:'Home',
          buttonIcon: '../../../../assets/sidebar/Home-icon.svg',
          routerHref: '/'
        }, 
        {
          buttonName: 'Categories',
          buttonIcon: '../../../../assets/sidebar/categories.svg',
          routerHref: '/'
        },
        {
          buttonName: 'Donate term',
          buttonIcon: '../../../../assets/sidebar/Add term-icon.svg',
          routerHref: '/'
        }
      ]
    },
    {
      name: 'Learning',
      buttons: [       
        {
          buttonName: 'Rules',
          buttonIcon: '../../../../assets/sidebar/Rules-icon.svg',
          routerHref: '/about'
        },
        {
          buttonName: 'Exercises',
          buttonIcon: '../../../../assets/sidebar/Exercise-icon.svg',
          routerHref: '/about'
        },
        {
          buttonName: 'About us',
          buttonIcon: '../../../../assets/sidebar/About us-icon.svg',
          routerHref: '/about'
        },

      ]
    },
  ]
  idiom: string = 'walk on air'



}
