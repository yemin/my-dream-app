import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyGridComponent } from './grid/my-grid.component';
import { MyChartsComponent } from './charts/index';
import { TemplateFormComponent } from './forms/template-form.component';
import { BingMapComponent } from './map/bing-map.component';
import { PlayersComponent } from './players/players.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { charts } from './player-detail.component';

const routes: Routes = [
    { path: '', component: MyGridComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'grid', component: MyGridComponent, canActivate: [AuthGuard] },
    { path: 'charts', component: MyChartsComponent, canActivate: [AuthGuard]},
    { path: 'map', component: BingMapComponent, canActivate: [AuthGuard] },
    { path: 'players', component: PlayersComponent, canActivate: [AuthGuard]},
    { path: 'forms', component: TemplateFormComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { 
}