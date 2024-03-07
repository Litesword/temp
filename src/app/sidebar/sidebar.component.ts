import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('sidebarState', [
      state('open', style({
        width: '280px'
      })),
      state('closed', style({
        width: '50px'
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ]),
    
    ])
  ]          
  
})
export class SidebarComponent {
  
    sidebarState = true;
  
    toggleSidebar() {
      this.sidebarState = this.sidebarState === true ? false : true;
    }
  
}
