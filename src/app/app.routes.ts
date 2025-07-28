import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { ProfileComponent } from './features/profile/profile.component';
import { AuthComponent } from './features/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/404' },
  {
    path: '404',
    component: NotfoundComponent,
  },
];
