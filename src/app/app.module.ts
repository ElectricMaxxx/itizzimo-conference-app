import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import {CallForPapersComponent} from "./components/callforpapers.component";
import {SpeakerDashboardComponent } from "./components/speaker_dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashBoardComponent} from "./components/dashboard.component";
import {BackendService} from "./services/backend.service";
import {TalkDasboardComponent} from "./components/talk_dashboard.component";
import {AdminDashboardComponent} from "./components/admin_dashboard.component";
import {TalkOnDashboardComponent} from "./components/talk_on_dashboard.component";
import {SpeakerFormComponent} from "./components/SpeakerFormComponent";
import {SpeakerNameComponent} from "./components/SpeakerNameComponent";
import {SpeakerEmailComponent} from "./components/SpeakerEmailComponent";
import {SpeakerButtonsComponent} from "./components/SpeakerButtonsComponent";
import {CommonModule} from "@angular/common";

const appRoutes: Routes = [
  { path: 'call-for-papers', component: CallForPapersComponent },
  { path: 'speaker/:id',      component: SpeakerDashboardComponent },
  { path: 'speakers', component: SpeakerDashboardComponent, data: {id: null}},
  { path: 'talks', component: TalkDasboardComponent, data: {id: null}},
  { path: 'talks/:id', component: TalkDasboardComponent},
  { path: 'admin', component: AdminDashboardComponent},
  { path: '', component: DashBoardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CallForPapersComponent,
    SpeakerDashboardComponent,
    DashBoardComponent,
    TalkDasboardComponent,
    AdminDashboardComponent,
    TalkOnDashboardComponent,
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
