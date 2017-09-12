import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './Login/login.module#LoginModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'login', 
        loadChildren: './login/login.module#LoginModule' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }