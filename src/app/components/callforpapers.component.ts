import {Component, OnInit} from "@angular/core";
import {Speaker} from "../values/interfaces";
import {BackendService} from "../services/backend.service";

@Component({
    selector: 'call-for-paper',
    templateUrl: './callforpaper.component.html',
    styleUrls: ['./callforpaper.component.css']
})
export class CallForPapersComponent implements OnInit {
    public speakers: Speaker[];
    public isRegistering: boolean;

    constructor (private service: BackendService) {}

    ngOnInit(): void {
        this.isRegistering = false;
        this.service.getSpeakers().then((speakers: Speaker[]) => this.speakers = speakers);
    }

    onClickRegisterSpeaker() {
        this.isRegistering = true;
    }

    onRegisterSpeaker(event: any) {
        this.service.addSpeaker(event);
        this.isRegistering = false;
    }

    onCancelRegisterSpeaker() {
        this.isRegistering = false;
    }
}
