import {Component, OnInit} from "@angular/core";
import {Speaker} from "../values/interfaces";

@Component({
    selector: 'call-for-paper',
    templateUrl: './callforpaper.component.html',
    styleUrls: ['./callforpaper.component.css']
})
export class CallForPapersComponent implements OnInit {
    public isRegistering: boolean;
    public speakers: Speaker[] = [];
    public speaker: Speaker;

    ngOnInit(): void {
        this.speaker = {name: '', email: '', id: 0};
        this.isRegistering = false;
    }

    onClickRegisterSpeaker() {
        this.isRegistering = true;
    }


    onRegisterSpeaker() {
        this.speakers.push(this.speaker);
        this.speaker = {name: '', email: '', id: 0};
        this.isRegistering = false;
    }

    onCancelRegisterSpeaker() {
        this.isRegistering = false;
    }
}
