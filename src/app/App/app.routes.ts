import { Routes } from '@angular/router';
import { ManageAppComponent } from './manage-app.component';
import { LoginComponent } from './Login';

export const ROUTER_CONFIG: Routes = [
    {
        path: '',
        component: ManageAppComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/manage/login'
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
]