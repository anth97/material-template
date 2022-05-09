import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./user/list/list.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'user-list', component: ListComponent},
            { path: '**', redirectTo: ''}
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRoutingModule { }