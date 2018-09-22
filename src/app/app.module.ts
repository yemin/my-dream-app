import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';

import { AppComponent } from './app.component';
import { BingMapComponent } from './map/bing-map.component';
import { MyGridComponent } from './grid/my-grid.component';
import { TemplateFormComponent } from './forms/template-form.component';
import { MyChartsComponent, MyBarChartComponent, MyLineChartComponent } from './charts/index';
import { PlayersComponent } from './players/players.component';
import { PlayerService } from './players/player.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_directives/alert.component';
import { AuthenticationService, AlertService, UserService } from './_services/index';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-beckend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BingMapComponent,
    MyGridComponent,
    TemplateFormComponent,
    MyChartsComponent, MyBarChartComponent, MyLineChartComponent,
    PlayersComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    GridModule,
    ChartsModule
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    PlayerService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
