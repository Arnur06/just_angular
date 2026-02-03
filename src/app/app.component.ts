import {Component, HostListener, OnInit, signal} from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {MainComponent} from './main/main.component';
import {CustomersComponent} from './customers/customers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSidebarComponent, MainComponent, CustomersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLeftSidebarCollapsed =  signal<boolean>( false);
  screenWidth= signal<number>(window.innerWidth)

  @HostListener('window:resize')
  onResize(){
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768){
      this.isLeftSidebarCollapsed.set(true);
    }
  }
  ngOnInit() {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768)
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean) {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
