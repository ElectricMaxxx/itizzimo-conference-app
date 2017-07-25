import {Component, OnInit} from "@angular/core";
import {BackendService} from "../services/backend.service";
import {CompleteTalk} from "../values/interfaces";
import * as _ from "lodash";

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashBoardComponent implements OnInit {
    public title: string;
    public talks: CompleteTalk[];

    constructor (private service: BackendService) {}

    ngOnInit(): void {
        this.talks = [];
        this.title = 'iTiZZiMO Conference'
        this.service.getCompleteTalks().then((talks: CompleteTalk[]) => {
            talks.forEach((talk: CompleteTalk) => {
                if (talk.accepted && talk.timeSlot) {
                    this.talks.push(talk);
                }
            });

            _.orderBy(this.talks, ['order']);
        });
    }
}
