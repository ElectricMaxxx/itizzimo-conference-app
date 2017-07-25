
import {Component, OnInit} from "@angular/core";
import {Speaker, Talk} from "../values/interfaces";
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {BackendService} from "../services/backend.service";
@Component({
    selector: 'speaker-dashboard',
    templateUrl: "./speaker_dashboard.component.html"
})
export class SpeakerDashboardComponent implements OnInit{
    public speaker: Speaker;
    public speakers: Speaker[];
    public talks: Talk[];
    public isSpeaker: boolean;
    public addTalk: boolean;
    public talk: Talk;

    constructor (private route: ActivatedRoute, private service: BackendService) {}

    ngOnInit(): void {
        this.isSpeaker = false;
        this.speakers = [];
        this.addTalk = false;
        this.resetTalk();

        const id = this.route.snapshot.paramMap.get('id');

        if (null == id) {
            this.service.getSpeakers().then((speakers: Speaker[]) => this.speakers = speakers);
            return;
        } else {
            this.service.getSpeaker(id).then((speaker:Speaker) => {
                this.speaker = speaker;
                this.isSpeaker = true;
            });

            this.service.getTalksBySpeakerId(id).then((talks: Talk[]) => this.talks = talks);
        }
    }

    private resetTalk()
    {
        this.talk = {name: '', abstract: '', speaker_id: 0, id: 0, accepted: false};
    }

    onClickAddTalk() {
        this.addTalk = true;
    }

    onAddTalk() {
        this.talk.speaker_id = this.speaker.id;
        this.service.addTalk(this.talk);
        this.resetTalk();
        this.addTalk = false;

        this.service.getTalksBySpeakerId(this.speaker.id).then((talks: Talk[]) => this.talks = talks);
    }

    onCancelAddTalk() {
        this.addTalk = false;
    }
}
