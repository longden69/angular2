import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user/user-register.component';
import { UserDetailComponent } from './user/user-detail.component';
import { HighLightComponent } from './user/high-light.component';
import { UserListComponent } from './user/user-list.component';
import { UserEmailComponent } from './user/user-email.component';
import { NotFoundComponent } from './user/not-found.component';
import { AdminLoginComponent } from './admin/admin-login.component';

import { HideStrPipe } from './hide-str.pipe';
import { TimeFormatPipe } from './pipes/time-format.pipe';

import { HightlightDirective } from './user/hightlight.directive';
import { ValidateEmailDirective } from './directives/validate-email.directive';

import { UserService } from './services/user.service';

import { appRoutes } from './app.routes';

import { UserGuard } from './guards/user.guard';
import { RoleGuard } from './services/role.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserDetailComponent,
    HighLightComponent,
    UserListComponent,
    UserEmailComponent,
    NotFoundComponent,
    AdminLoginComponent,
    HideStrPipe,
    TimeFormatPipe,
    HightlightDirective,
    ValidateEmailDirective,
  ],
  imports: [
    BrowserModule, FormsModule, appRoutes, RouterModule, HttpClientModule
  ],
  providers: [UserService, UserGuard, RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
