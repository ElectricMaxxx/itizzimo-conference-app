
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BackendService} from "../services/backend.service";
import {CompleteTalk, Talk} from "../values/interfaces";

@Component({
    selector: 'talk-dashboard',
    templateUrl: 'talk_dashboard.component.html'
})
export class TalkDasboardComponent implements OnInit {
    public isTalk: boolean;
    public talk: CompleteTalk;
    public talks: Talk[];

    constructor (private route: ActivatedRoute, private service: BackendService) {}

    ngOnInit(): void {
        this.isTalk = false;
        this.restTalk();

        const id = this.route.snapshot.paramMap.get('id');
        if (null == id) {
            this.fetchTalks();
        } else {
            this.service.getCompleteTalk(id).then((talk: CompleteTalk) => {
                this.talk = talk;
                this.isTalk = true;
            });
        }
    }

    private restTalk() {
        this.talk = {name: '', abstract: '', speaker_id: 0, id: 0, accepted: false, speaker: null};
    }

    private fetchTalks() {
        this.service.getTalks().then((talks: Talk[]) => this.talks = talks);
    }

}
