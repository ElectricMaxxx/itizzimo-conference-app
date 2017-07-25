import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'speaker-email',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="form-group" [formGroup]="parent">
            <input type="email" placeholder="Speaker email address" formControlName="email" required>
            <div class="error" *ngIf="invalid">
                Speaker email address is required
            </div>
        </div>
    `
})
export class SpeakerEmailComponent {
    @Input() parent: FormGroup;

    get invalid() {
        return (this.parent.get('email').hasError('required') && this.parent.get('email').touched);
    }
}
