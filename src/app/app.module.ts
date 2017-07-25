import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import {CallForPapersComponent} from "./components/callforpapers.component";
import {FormsModule} from "@angular/forms";
import {SpeakerDashboardComponent} from "./components/speaker_dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {BackendService} from "./services/backend.service";


const appRoutes: Routes = [
    { path: 'call-for-papers', component: CallForPapersComponent },
    { path: 'speaker/:id',      component: SpeakerDashboardComponent },
    { path: 'speakers', component: SpeakerDashboardComponent, data: {id: null}}
];

@NgModule({
  declarations: [
    AppComponent,
    CallForPapersComponent,
    SpeakerDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
