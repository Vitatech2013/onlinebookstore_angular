import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ShopkeeperLoginComponent } from './shopkeeper/shopkeeper-login/shopkeeper-login.component';
import { ShopkeeperDashboardComponent } from './shopkeeper/shopkeeper-dashboard/shopkeeper-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminViewShopkeepersComponent } from './admin/admin-view-shopkeepers/admin-view-shopkeepers.component';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';
import { AdminViewBooksComponent } from './admin/admin-view-books/admin-view-books.component';
import { AdminViewQueriesComponent } from './admin/admin-view-queries/admin-view-queries.component';
import { AdminChangePwdComponent } from './admin/admin-change-pwd/admin-change-pwd.component';
import { ShopkeeperRegisterationComponent } from './shopkeeper/shopkeeper-registeration/shopkeeper-registeration.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ShopkeeperLoginComponent,
    ShopkeeperDashboardComponent,
    UserLoginComponent,
    UserDashboardComponent,
    AdminViewShopkeepersComponent,
    AdminViewUsersComponent,
    AdminViewBooksComponent,
    AdminViewQueriesComponent,
    AdminChangePwdComponent,
    ShopkeeperRegisterationComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
