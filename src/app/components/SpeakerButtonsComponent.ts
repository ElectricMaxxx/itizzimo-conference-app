
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
    selector: 'speaker-buttons',
    template: `

        <div class="form-group" [formGroup]="parent">
            <button
                    type="button"
                    class="form-control btn btn-success"
                    [disabled]="parent.invalid"
                    (click)="onRegisterSpeaker()">Register</button>
            <button
                    type="button"
                    class="form-control btn btn-danger"
                    (click)="onCancelRegisterSpeaker()">Cancel</button>
        </div>
    `
})
export class SpeakerButtonsComponent {
    @Input() parent: FormGroup;
    @Output() onSpeakerRegistration = new EventEmitter<any>();
    @Output() onCancelSpeakerRegistration = new EventEmitter<any>();

    onRegisterSpeaker() {
        this.onSpeakerRegistration.emit();
    }

    onCancelRegisterSpeaker() {
        this.onCancelSpeakerRegistration.emit();
    }
}
