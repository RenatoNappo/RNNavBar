import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { MattersComponent } from './matters/matters.component';
import { MatterComponent } from './matter/matter.component';
import { ClientComponent } from './client/client.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AlertModule } from 'ngx-bootstrap';

import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClientsComponent,
    MattersComponent,
    MatterComponent,
    ClientComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'clients/:id/:clientname',
        component: ClientComponent
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'matters/:id/:description',
        component: MatterComponent
      },
      {
        path: 'matters',
        component: MattersComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
