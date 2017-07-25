
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {CallForPapersComponent} from "./callforpapers.component";
import {FormsModule} from "@angular/forms";

describe('CallForPapersComponent', () => {
    let comp: CallForPapersComponent;
    let fixture: ComponentFixture<CallForPapersComponent>;
    let button: HTMLElement;
    let buttonContainer: HTMLElement;
    let registeringForm: HTMLElement;
    let tableBody: HTMLElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [CallForPapersComponent],
            imports: [FormsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CallForPapersComponent);
        comp = fixture.componentInstance;
        fixture.autoDetectChanges();

        tableBody = fixture.debugElement.query(By.css('table tbody')).nativeElement;

    });

    it('should create the app', async(() => {
        expect(comp).toBeTruthy();
    }));

    describe('Component on start', () => {
        beforeEach(() => {
            buttonContainer = fixture.debugElement.query(By.css('div.buttons')).nativeElement;
        });
        it('should display container for buttons', () => {
            expect(buttonContainer).toBeTruthy('The container for the button should exist')
        });
    });

    describe('Component is in registering mode', () => {
        beforeEach(() => {
            comp.isRegistering = true;
            fixture.detectChanges();
            registeringForm = fixture.debugElement.query(By.css('input#name')).nativeElement;
        });

        it('should display the form', () => {
            expect(registeringForm).toBeTruthy('The form with name should be visible now');
        });

        it('should have heading line only', () => {
            expect(tableBody.children.length).toBe(1, 'Table should contain heading line only');
        });
    });

    describe('Having Speakers', () => {
        beforeEach(() => {
            comp.speakers.push({name: 'new speaker', email: 'speaker@mayflower.de', id: 1});
            fixture.detectChanges();
        });

        it('should have at least one speaker in the table', () => {
            expect(tableBody.children.length).toBe(2, 'Table should contain two lines (Heading and first speaker)');
        });
    });
});
