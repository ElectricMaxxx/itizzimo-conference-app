import {Component, OnInit} from "@angular/core";
import {Speaker} from "../values/interfaces";
import {BackendService} from "../services/backend.service";

@Component({
    selector: 'call-for-paper',
    templateUrl: './callforpaper.component.html',
    styleUrls: ['./callforpaper.component.css']
})
export class CallForPapersComponent implements OnInit {
    public isRegistering: boolean;
    public speakers: Speaker[] = [];
    public speaker: Speaker;

    constructor (private service: BackendService) {}

    ngOnInit(): void {
        this.speaker = {name: '', email: '', id: 0};
        this.isRegistering = false;

        this.service.getSpeakers().then((speakers: Speaker[]) => this.speakers = speakers);
    }

    onClickRegisterSpeaker() {
        this.isRegistering = true;
    }


    onRegisterSpeaker() {
        this.service.addSpeaker(this.speaker);
        this.speaker = {name: '', email: '', id: 0};
        this.isRegistering = false;
    }

    onCancelRegisterSpeaker() {
        this.isRegistering = false;
    }
}
