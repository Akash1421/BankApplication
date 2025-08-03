import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './Header-components/menu/menu.component';
import { ProfileComponent } from './Header-components/profile/profile.component';
import { ReportsAndDashboardsComponent } from './Header-components/reports-and-dashboards/reports-and-dashboards.component';
import { SearchTabComponent } from './Header-components/search-tab/search-tab.component';

export const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    {path:'homepage',component:HomePageComponent},
    {path:'menu',component:MenuComponent},
    {path:'profile',component:ProfileComponent},
    {path:'reports-and-dashboards',component:ReportsAndDashboardsComponent},
    {path:'search-tab',component:SearchTabComponent}
    
];
