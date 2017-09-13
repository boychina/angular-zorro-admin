import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './Layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'login', 
        loadChildren: './Login/login.module#LoginModule' 
    },
    {
        path: 'signup',
        loadChildren: './SignUp/signup.module#SignupModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }