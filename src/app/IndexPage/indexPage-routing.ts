import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './indexPage.component';

const routes: Routes = [
    {
        path: '',
        component: IndexPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IndexPageRoutingModule {
    
}