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
          buttonIcon: '../../../../assets/sidebar/Home-icon.svg' 
        }, 
        {
          buttonName: 'Exercises',
          buttonIcon: '../../../../assets/sidebar/Exercise-icon.svg'
        },
        {
          buttonName: 'About us',
          buttonIcon: '../../../../assets/sidebar/About us-icon.svg'
        }
      ]
    },
    {
      name: 'Secondary',
      buttons: [       
        {
          buttonName: 'Rules',
          buttonIcon: '../../../../assets/sidebar/Rules-icon.svg'
        },
        {
          buttonName: 'Add term',
          buttonIcon: '../../../../assets/sidebar/Add term-icon.svg'
        }
      ]
    },
    {
      name: 'Contacts',
      buttons: [
        {
          buttonName:'Istagram',
          buttonIcon: '../../../../assets/sidebar/Instagram-icon.svg' 
        }, 
        {
          buttonName: 'Youtube',
          buttonIcon: '../../../../assets/sidebar/Youtube-icon.svg'
        },
        {
          buttonName: 'Contact us',
          buttonIcon: '../../../../assets/sidebar/Contact us-icon.svg'
        }
      ]
    },
  ]
  idiom: string = 'walk on air'



}
