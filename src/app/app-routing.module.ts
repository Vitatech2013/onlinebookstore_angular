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
  {path:'user-dashboard', component:UserDashboardComponent},
  {path:'shopkeeper-dashboard', component:ShopkeeperDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
