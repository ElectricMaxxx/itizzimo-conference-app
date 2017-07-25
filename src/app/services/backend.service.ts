import {Injectable} from "@angular/core";
import {CompleteTalk, Speaker, Talk} from "../values/interfaces";
import * as _ from 'lodash';

export interface State {
    speakers: Speaker[],
    talks: Talk[]
}
const state: State = {
    speakers: [
        {id: 1, name: 'Max', email: 'maximilian.berghoff@mayflower.de'}
    ],
    talks: [
        {id: 1, name: "first talk", abstract: "Some more text", accepted: true, speaker_id: 1},
        {id: 2, name: "second talk", abstract: "Some more other text", accepted: false, speaker_id: 1},
        {id: 1, name: "third talk", abstract: "Some more more more and other text", accepted: true, speaker_id: 1, timeSlot: 'So 9:00 - Sa 9:45'},
    ]
};

const speakersPromise = Promise.resolve(state.speakers);
const talksPromise = Promise.resolve(state.talks);

@Injectable()
export class BackendService {
    private lastIndexSpeakers: number;
    private lastIndexTalks: number;

    constructor() {
        this.lastIndexSpeakers = 1;
        this.lastIndexTalks = 2;
    }

    getSpeaker(id: string | string): Promise<Speaker> {
        return speakersPromise.then((speakers: Speaker[]) => {
            return speakers.find(speaker => speaker.id === +id);
        });
    }

    addSpeaker(speaker: Speaker): void {
        speaker.id = ++this.lastIndexSpeakers;
        state.speakers.push(speaker);
    }

    getSpeakers(): Promise<Speaker[]> {
        return speakersPromise;
    }

    getTalk(id: number | string): Promise<Talk> {
        return talksPromise.then((talks: Talk[]) => {
            return talks.find(talk => talk.id === +id);
        });
    }

    getTalksBySpeakerId(id: number | string): Promise<Talk[]> {
            return Promise.resolve(_.filter(state.talks, {speaker_id: +id}));
    }

    addTalk(talk: Talk): void {
        talk.id = ++this.lastIndexTalks;
        state.talks.push(talk);
    }

    getTalks(): Promise<Talk[]> {
        return talksPromise;
    }

    getCompleteTalks(): Promise<CompleteTalk[]> {
        return talksPromise.then((talks: Talk[]) => {
            const completeTalks: CompleteTalk[] = [];
            talks.forEach((talk: Talk) => {
                completeTalks.push(this.convertToCompleteTalk(talk));
            });

            return completeTalks;
        });
    }

    private convertToCompleteTalk(talk: Talk): CompleteTalk
    {
        return {
            id: talk.id,
            name: talk.name,
            abstract: talk.abstract,
            accepted: talk.accepted,
            speaker_id: talk.speaker_id,
            timeSlot: talk.timeSlot,
            speaker: state.speakers.find((speaker: Speaker) => speaker.id == talk.speaker_id),
        };
    }

    getCompleteTalk(id: string | number): Promise<CompleteTalk> {
        return this.getTalk(id).then((talk: Talk) => this.convertToCompleteTalk(talk));
    }

    acceptTalk(id: number) {
        let talk = state.talks.find((talk: Talk) => talk.id == id);
        talk.accepted = true;
    }

    declineTalk(id: number) {
        let talk = state.talks.find((talk: Talk) => talk.id == id);
        talk.accepted = false;
    }

    saveTalk(talkToSave: Talk) {
        this.getTalk(talkToSave.id).then((talk: Talk) => {
            talk.name = talkToSave.name;
            talk.abstract = talkToSave.abstract;
            talk.timeSlot = talkToSave.timeSlot;
        });
    }
}
