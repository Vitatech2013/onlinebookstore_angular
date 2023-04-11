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
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { ShopkeeperProfileComponent } from './shopkeeper/shopkeeper-profile/shopkeeper-profile.component';
import { ShopkeeperViewUsersComponent } from './shopkeeper/shopkeeper-view-users/shopkeeper-view-users.component';
import { ShopkeeperAddBooksComponent } from './shopkeeper/shopkeeper-add-books/shopkeeper-add-books.component';
import { ShopkeeperViewBooksComponent } from './shopkeeper/shopkeeper-view-books/shopkeeper-view-books.component';
import { ShopkeeperOrderBooksComponent } from './shopkeeper/shopkeeper-order-books/shopkeeper-order-books.component';
import { ShopkeeperViewQueriesComponent } from './shopkeeper/shopkeeper-view-queries/shopkeeper-view-queries.component';
import { ShopkeeperChangePwdComponent } from './shopkeeper/shopkeeper-change-pwd/shopkeeper-change-pwd.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserViewShopsComponent } from './user/user-view-shops/user-view-shops.component';
import { UserSearchbooksComponent } from './user/user-searchbooks/user-searchbooks.component';
import { UserMybooksComponent } from './user/user-mybooks/user-mybooks.component';
import { UserAddQueriesComponent } from './user/user-add-queries/user-add-queries.component';
import { UserFavouritesComponent } from './user/user-favourites/user-favourites.component';
import { UserViewQueriesComponent } from './user/user-view-queries/user-view-queries.component';
import { UserChangePasswordComponent } from './user/user-change-password/user-change-password.component'

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
    UserRegistrationComponent,
    ShopkeeperProfileComponent,
    ShopkeeperViewUsersComponent,
    ShopkeeperAddBooksComponent,
    ShopkeeperViewBooksComponent,
    ShopkeeperOrderBooksComponent,
    ShopkeeperViewQueriesComponent,
    ShopkeeperChangePwdComponent,
    UserProfileComponent,
    UserViewShopsComponent,
    UserSearchbooksComponent,
    UserMybooksComponent,
    UserAddQueriesComponent,
    UserFavouritesComponent,
    UserViewQueriesComponent,
    UserChangePasswordComponent
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
