import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './Home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'login', 
        loadChildren: './Login/login.module#LoginModule' 
    },
    {
        path: 'signup',
        loadChildren: './SignUp/signup.module#SignupModule'
    },
    {
        path: 'indexpage',
        loadChildren: './IndexPage/indexPage.module#IndexPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }