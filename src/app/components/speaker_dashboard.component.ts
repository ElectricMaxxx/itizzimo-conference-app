
import {Component, OnInit} from "@angular/core";
import {Speaker, Talk} from "../values/interfaces";
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';

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

    constructor (private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.isSpeaker = false;
        this.speakers = [{id: 1, name: 'Max', email: 'maximilian.berghoff@mayflower.de'}];
        this.addTalk = false;
        this.talks = [];
        this.resetTalk();

        const id = this.route.snapshot.paramMap.get('id');

        this.speaker = this.speakers.find(speaker => speaker.id == Number(id));
        if (!_.isUndefined(this.speaker)) {
            this.isSpeaker = true;
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
        this.talks.push(this.talk);
        this.resetTalk();
        this.addTalk = false;
    }

    onCancelAddTalk() {
        this.addTalk = false;
    }
}
