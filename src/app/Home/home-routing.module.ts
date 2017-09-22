import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
// import { IndexPageComponent } from '../IndexPage/indexPage.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path: 'indexpage',
    //     component: IndexPageComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {
    
}