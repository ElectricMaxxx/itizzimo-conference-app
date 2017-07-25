import {Component, Input} from "@angular/core";
import {CompleteTalk} from "../values/interfaces";

@Component({
    selector: 'talk-on-dashboard',
    templateUrl: 'talk_on_dashboard.component.html'
})
export class TalkOnDashboardComponent {
    @Input() talk: CompleteTalk;
}
