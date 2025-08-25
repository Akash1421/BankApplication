import { Component } from '@angular/core';
import { MenuComponent } from '../Header-components/menu/menu.component';
import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  imports: [MatMenu,MatMenuModule,MatButton],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
PendingRequest: any;
CustomerDetails: any;

}
