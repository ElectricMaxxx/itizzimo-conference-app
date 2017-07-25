import {Speaker} from "../values/interfaces";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'speaker-form',
    template: `
        <form class="form-inline" [formGroup]="form">
            <speaker-name [parent]="form"></speaker-name>
            <speaker-email [parent]="form"></speaker-email>
            <speaker-buttons
                    [parent]="form"
                    (onCancelSpeakerRegistration)="disableForm()"
                    (onSpeakerRegistration)="addSpeaker()"></speaker-buttons>
        </form>
    `
})
export class SpeakerFormComponent{
    @Input() speaker: Speaker;

    form = this.fb.group({name: ['', Validators.required], email: ['', Validators.required]});

    @Output() onDisableForm = new EventEmitter<any>();
    @Output() onAddingSpeaker = new EventEmitter<Speaker>()

    constructor(private fb: FormBuilder) {}

    addSpeaker() {
        if (this.form.invalid) {
            return;
        }

        this.onAddingSpeaker.emit(this.form.value);
    }

    disableForm() {
        this.onDisableForm.emit();
    }
}
