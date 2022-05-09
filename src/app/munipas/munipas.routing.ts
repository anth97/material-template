import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CreateComponent } from "./pages/user/create/create.component";
import { ListComponent } from "./pages/user/list/list.component";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'user-list', component: ListComponent},
            { path: 'user-create', component: CreateComponent},
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