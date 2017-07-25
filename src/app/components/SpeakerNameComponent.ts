import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'speaker-name',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="form-group" [formGroup]="parent">
            <input type="text" placeholder="Speaker name" formControlName="name" required>
            <div class="error"  *ngIf="invalid">
                Speaker name is required
            </div>
        </div>
    `
})
export class SpeakerNameComponent {
    @Input() parent: FormGroup;

    get invalid() {
        return (this.parent.get('name').hasError('required') && this.parent.get('name').touched);
    }
}
