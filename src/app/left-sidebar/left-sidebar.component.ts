import {Component,  input, output} from '@angular/core';
import { RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed =  input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon:'fa fa-key',
      label: 'Dashboard'
    },
    {
      routeLink: 'products',
      icon:'fa fa-copyright',
      label: 'Products'
    },
    {
      routeLink: 'customers',
      icon:'fa fa-users',
      label: 'Customers'
    },
    {
      routeLink: 'income',
      icon:'fas fa-euro-sign',
      label: 'Income'
    },
    {
      routeLink: 'promote',
      icon:'fas fa-chart-bar',
      label: 'Promote'
    },
    {
      routeLink: 'help',
      icon:'fa fa-question-circle',
      label: 'Help'
    }

  ]
  toggleCollapse(){
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}

// export default LeftSidebarComponent
