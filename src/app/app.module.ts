import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import {CallForPapersComponent} from "./components/callforpapers.component";
import {SpeakerDashboardComponent } from "./components/speaker_dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BackendService} from "./services/backend.service";
import {SpeakerFormComponent} from "./components/SpeakerFormComponent";
import {SpeakerNameComponent} from "./components/SpeakerNameComponent";
import {SpeakerEmailComponent} from "./components/SpeakerEmailComponent";
import {SpeakerButtonsComponent} from "./components/SpeakerButtonsComponent";
import {CommonModule} from "@angular/common";

const appRoutes: Routes = [
    { path: 'call-for-papers', component: CallForPapersComponent },
    { path: 'speaker/:id',      component: SpeakerDashboardComponent },
    { path: 'speakers', component: SpeakerDashboardComponent, data: {id: null}}
];

@NgModule({
  declarations: [
    AppComponent,
    CallForPapersComponent,
    SpeakerDashboardComponent,
    SpeakerFormComponent,
    SpeakerNameComponent,
    SpeakerEmailComponent,
    SpeakerButtonsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    FormsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
