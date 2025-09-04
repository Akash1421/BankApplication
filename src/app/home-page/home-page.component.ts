import { Component } from '@angular/core';
import { MenuComponent } from '../Header-components/menu/menu.component';
import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  imports: [MatMenu,MatMenuModule,MatButton, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
gotoDailyReports() {
throw new Error('Method not implemented.');
}
gotoResourceUtilization() {
throw new Error('Method not implemented.');
}
gotoCustomerReports() {
throw new Error('Method not implemented.');
}
gotoPendingRequest() {
throw new Error('Method not implemented.');
}
gotoCustomerDetails() {
throw new Error('Method not implemented.');
}
ExternalApp1(){

}
ExternalApp2(){
  
}

}
