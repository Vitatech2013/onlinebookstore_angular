import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ShopkeeperLoginComponent } from './shopkeeper/shopkeeper-login/shopkeeper-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ShopkeeperDashboardComponent } from './shopkeeper/shopkeeper-dashboard/shopkeeper-dashboard.component';
import { ShopkeeperRegisterationComponent } from './shopkeeper/shopkeeper-registeration/shopkeeper-registeration.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AdminViewShopkeepersComponent } from './admin/admin-view-shopkeepers/admin-view-shopkeepers.component';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';
import { AdminViewBooksComponent } from './admin/admin-view-books/admin-view-books.component';
import { AdminViewQueriesComponent } from './admin/admin-view-queries/admin-view-queries.component';
import { AdminChangePwdComponent } from './admin/admin-change-pwd/admin-change-pwd.component';
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
import { UserFavouritesComponent } from './user/user-favourites/user-favourites.component';
import { UserAddQueriesComponent } from './user/user-add-queries/user-add-queries.component';
import { UserViewQueriesComponent } from './user/user-view-queries/user-view-queries.component';
import { UserChangePasswordComponent } from './user/user-change-password/user-change-password.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent, children:[
    {path:'admin-login',component:AdminLoginComponent},
    {path:'shopkeeper-login', component:ShopkeeperLoginComponent},
    {path:'user-login', component:UserLoginComponent},
    {path:'shopkeeper-register', component:ShopkeeperRegisterationComponent},
    {path:'user-registration', component:UserRegistrationComponent}
  ]},
  {path:'admin-dashboard',component:AdminDashboardComponent, children:[
    {path:'admin-view-shopkeepers',component:AdminViewShopkeepersComponent},
    {path:'admin-view-users', component:AdminViewUsersComponent},
    {path:'admin-view-books', component:AdminViewBooksComponent},
    {path:'admin-view-queries', component:AdminViewQueriesComponent},
    {path:'admin-change-pwd', component:AdminChangePwdComponent}
  ]},
  {path:'user-dashboard', component:UserDashboardComponent,children:[
    {path:'user-profile', component:UserProfileComponent},
    {path:'user-shops', component:UserViewShopsComponent},
    {path:'user-searchbooks',component:UserSearchbooksComponent},
    {path:'user-mybooks',component:UserMybooksComponent},
    {path:'user-favourites',component:UserFavouritesComponent},
    {path:'user-add-queries',component:UserAddQueriesComponent},
    {path:'user-view-queries',component:UserViewQueriesComponent},
    {path:'user-change-pwd',component:UserChangePasswordComponent},
  ]},
  {path:'shopkeeper-dashboard', component:ShopkeeperDashboardComponent,children:[
    {path:'sk-profile', component:ShopkeeperProfileComponent},
    {path:'sk-view-users', component:ShopkeeperViewUsersComponent},
    {path:'sk-add-books', component:ShopkeeperAddBooksComponent},
    {path:'sk-view-books', component:ShopkeeperViewBooksComponent},
    {path:'sk-order-books', component:ShopkeeperOrderBooksComponent},
    {path:'sk-view-queries', component:ShopkeeperViewQueriesComponent},
    {path:'sk-change-pwd',component:ShopkeeperChangePwdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
