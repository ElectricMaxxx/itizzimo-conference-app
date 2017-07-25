import {Component, OnInit} from "@angular/core";
import {CompleteTalk, Talk, TimeSlot} from "../values/interfaces";
import {BackendService} from "../services/backend.service";
import {System} from "../services/system";
@Component({
    'templateUrl': 'admin_dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit{
    public talks: CompleteTalk[];
    public availableTimeless: TimeSlot[];

    constructor (private service: BackendService) {}

    ngOnInit(): void {
        this.availableTimeless = System.timeSlots;
        this.refreshTalks();
    }

    private refreshTalks() {
        this.service.getCompleteTalks().then((talks: CompleteTalk[]) => {
            this.talks = talks
            this.resetAvailableTimeSlots();
        });
    }

    onClickAcceptTalk(id: number) {
        this.service.acceptTalk(id);
        this.refreshTalks();
        this.resetAvailableTimeSlots();
    }

    onClickDeclineTalk(id: number) {
        this.service.declineTalk(id);
        this.refreshTalks();
        this.resetAvailableTimeSlots();
    }

    setTimeSlot(talkId: number) {
        const talk = this.talks.find((talk: Talk) => talk.id == talkId);
        this.service.saveTalk(talk);
        this.resetAvailableTimeSlots();
    }

    freeTimeSlot(talkId: number) {
        const talk = this.talks.find((talk: Talk) => (talk.id == talkId && talk.accepted));
        talk.timeSlot = null;
        this.service.saveTalk(talk);
        this.resetAvailableTimeSlots();
    }

    private resetAvailableTimeSlots() {
        this.availableTimeless = [];
        System.timeSlots.forEach((timeSlot: TimeSlot) =>{
            const matchingSlot = this.talks.find((talk: Talk) => talk.timeSlot == timeSlot.value);
            if (!matchingSlot) {
                this.availableTimeless.push(timeSlot);
            }
        });
    }
}
