import { Routes, RouterModule } from '@angular/router';

import { UserEmailComponent } from './user/user-email.component';
import { UserListComponent } from './user/user-list.component';
import { HighLightComponent } from './user/high-light.component';
import { UserRegisterComponent } from './user/user-register.component';
import { NotFoundComponent } from './user/not-found.component';
import { AdminLoginComponent } from './admin/admin-login.component';
import { UserGuard } from './guards/user.guard';
import {RoleGuard} from './services/role.guard';

const routing: Routes = [
  {
    path: '',
    component: UserEmailComponent
  },
  {
    path: 'list-user',
    component: UserListComponent,
    data: {
      roles: ['Admin', 'User'],
    },
    canActivate: [RoleGuard, UserGuard]
  },
  {
    path: 'highlight',
    component: HighLightComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: AdminLoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRoutes = RouterModule.forRoot(routing);
