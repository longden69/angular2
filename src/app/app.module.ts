import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestModule } from './testmodule/test.module';
import { TestComponent } from './testmodule/test.component';

import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user/user-register.component';
import { UserDetailComponent } from './user/user-detail.component';
import { HighLightComponent } from './user/high-light.component';
import { UserListComponent } from './user/user-list.component';
import { UserEmailComponent } from './user/user-email.component';
import { NotFoundComponent } from './user/not-found.component';
import { AdminLoginComponent } from './admin/admin-login.component';
import { TestBootstrapComponent } from './testbootstrap/test-bootstrap.component';
import { ModalCustomclassComponent } from './testbootstrap/modal-customclass.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoEditComponent } from './todo/todo-edit.component';
import { TodoAddComponent } from './todo/todo-add.component';

import { HideStrPipe } from './hide-str.pipe';
import { TimeFormatPipe } from './pipes/time-format.pipe';

import { HightlightDirective } from './user/hightlight.directive';
import { ValidateEmailDirective } from './directives/validate-email.directive';

import { UserService } from './services/user.service';

import { appRoutes } from './app.routes';

import { UserGuard } from './guards/user.guard';
import { RoleGuard } from './guards/role.guard';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserDetailComponent,
    HighLightComponent,
    UserListComponent,
    NotFoundComponent,
    AdminLoginComponent,
    TestBootstrapComponent,
    ModalCustomclassComponent,
    TodoListComponent,
    TodoEditComponent,
    TodoAddComponent,
    HideStrPipe,
    HightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutes,
    RouterModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    TestModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, UserGuard, RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
