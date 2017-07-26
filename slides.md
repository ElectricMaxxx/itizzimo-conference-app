
### Angular Workshop
#### Maximilian Berghoff - 26.07.2017 - iTiZZiMO

Note: ... 

---

<span class="title-container">![Title-Pic](docs/images/title_picture.jpg)</span>

- Maximilian Berghoff <!-- .element: class="fragment" -->
- @ElectricMaxxx <!-- .element: class="fragment" -->
- github.com/electricmaxxx <!-- .element: class="fragment" -->
- Maximilian.Berghoff@mayflower.de <!-- .element: class="fragment" -->
- Mayflower GmbH - Würzburg <!-- .element: class="fragment" -->

---

# Ausblick

Note: ... Was wir heute vor haben ...

---

![Ausblick - ITiZZiMO Conference Tool](docs/images/ausblick.jpg)

Note: Konferenz Tool, mit CfP, Speaker Registration und Board zur Auswahl der Talks
      ... schluss endlich wollen:
      - einzelene Features in Angular anschauen und selber nachbauen
      - gibt ein Repo mit der fertigen App, meinen Slides und ein Repo zum stückweise voran arbeiten
      ... Doch vorher: ... KLICK

---


# History

Note: Ein wenig Geschichte

---

- Angular 1.x heißt jetzt AngularJS
- Angular 2 und 4 sind Angular
- Entwickelt in Community, der auch Google angehört
 
---

## AngularJS vs. Angular

Note: Was sind denn eig. die Unterschiden

---

### Angular JS

- Controller als Standard für ein "MVC"
- Komponenten durch Direktiven möglich
- Data-Binding everywhere

---

### Angular

- Fokus auf Komponenten
- Data-Binding kann/muss in der Verantwortung des Entwicklers
- Modul Struktur
- Typescript als Basis

---

- faktisch keine Migration von AngularJS auf Angular möglich (außer Rewrite)
- Angular 2 lässt sich einfach auf 4 migrieren

---

# Ausblick 2 - Themen

Note: ... Was wollen wir uns heute anschauen? ... KLICK

---

* Bootstraping - Installation einer Skeleton App mit dem CLI
* Basics:
* * Templating, Komponenten, App-Struktur, Routing, DI
* Advanced: 
* * Forms - Data-Binding oder Reactive
* * Events - Inter-Komponenten-Kommunikation
* * Async - Kommunikation mit einem Server

Note: ... Sieht jetzt nicht so extrem viel aus,aber wir werden uns damit schon beschäftigen.

--- 

# Los geht's

Note: Dann legen wir mal los.

---

# Task 1: Bootstraping

```bash
# install CLI
npm install -g @angular/cli

# Create new skeleton app
ng new conference-app
cd conference-app

# run it
ng serve -o
```

Note: Support:
      - Probleme bei den Rechten von `ng install -g ...`
      - Laufen lassen von npm install ...
      - Laufen lassen der App
      - Führen durch den Code und Struktur

---

# Alles auf Null

```bash

git clone git@github.com:ElectricMaxxx/itizzimo-conference-app.git

git checkout T1

```

Note: Nun sollte die App den selben Zustand haben.

---

# Basics - Struktur

Note: Fangen wir mal an und schauen uns die App einmal an
      - root folder mit config files `src` und `e2e` Test folder
      - `node_modules` ist auch schon da
      - application in `src/app`, noch umgeben von weitern config files und zum direkten Ausführen
      - `main.js` als Haupteinstiegspunkt - > `app/app.module.ts` Einstiegs Module
      - ...
      
---

# Basis - Templating

Note: Angular hat seine eigene "Template-Engine" mit im Gepäck.
      Templates sind grob das, was sich bis auf Direktiven, am wenigsten verändert hat.
---

## Templating - Interpolation

```angular2html
    {{ 'ich bin ein string'}}
    <!-- String -->
    
    {{ ichBinEineVariable}}
    <!-- public property in component -->
    
    {{ 'ich bin ein string' + ichBinEineVariable}}
    <!-- Concatenation -->
    
    {{ gibString() }}
    <!-- Method Call -->
    
```
```angular
export class AppComponent {
  ichBinEineVariable = 'app';
  gibString(): string {
    return 'Ich bin ein String';
  }
}
```

Note: Alles was in irgend einer Art und Weise in ein String über geht.
      - String selbst
      - public Property aus der Komponente
      - Concatenation

---

## Templating - Expressions

```angular2html
    [property]="expression"
```

Note: Produzieren einen Wert
      - kann ein Methoden-Aufruf sein
      - kann ein Boolscher Wert sein
      - wird einer Property zu gewiesen
      - d.h. erst ausgeführt
      
---

## Templating - Expressions

```angular2html
    <span [hidden]="isUnchanged">changed</span>
    <!-- Sichtbarkeit von Span Element -->
    
    <div *ngFor="let task of tasks">{{task.name}}</div>
    <!-- Angular interne Direktive -->
```
```angular
export class AppComponent {
  isUnchanged: bool = true;
  tasks: Task[] = [];
}
```

Note: - Verschiedene Properties erwarten verschiedene Werte/Ergebnisse
      - Bool'sch für Entscheidungen
      - Listen für "ForEach-Konstrukte"
      - Funktionen für Events

---

## Templating - Statements

```angular2html
 
    <button (click)="onClick()">Drück mich</button>
    <!-- Event Handler --> 
```
```angular
export class AppComponent {
  onClick(): void {
    alert('ich wurde gedrückt');
  }
}
```

Note: Im Gegensatz zu Expressions dienen Statements dazu um auf Interaktionen zu reagieren.

---

## Templates - Data Binding

|Data direction|Syntax|Type|
|--------------|------|----|
|One-Way from data source to view template|{{expression}},[target]="expression"|Interpolation, Property, Attribute, Class, Style|
|One-way from view target to data source|(target)="statement"|Event|
|Two-Way|[(target)]="expression"|Two-Way|

Note: Das wird klar, wenn man sich das Data-Binding anschaut:
      - abgeschrieben von den docs

---

# Task 2 - Templating

- Führe eine neue Komponente `SpeakerDashboardComponent` ein
- Erstelle eine Liste von Speakern und gebe diese aus
- Erstelle ein Formular um einen neuen Speaker anzulegen

---

# Basics - Testing

Note: ... A und O
      ... ohne Tests gibt es keine Qualität
      ... ohne Tests weiß ich als Dev auch nicht, ob ich was kaputt gemacht habe

---

## Testing - Unit-Tests*

##### * Testen der Komponenten sind eigentlich keine Unit-Tests, sollen hier aber unsere kleinste Einheit darstellen.

Note: Wir fangen einmal mit Unit-Tests an.
      - Setup komplett vorhanden
      - Karma (test runner)+ Jasmine (Framework)
      
---

```typescript

import { TestBed, async } from '@angular/core/testing';    
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
```

Note: - Test sind BDD – behavior driven
      - Ausgabe lässt sich von oben nach unten lesen
      - describe – TestSuite
      - beforeach() – zum herstellen eines Start-Zustandes
      - it – enthält expectations
      - TestBed – Helper um speziell Komponenten zu testen, können ähnliche Parameter wie @Component, @NgModule übergeben werden
      - async() – Zum auflösen der Asnychronität
      - fixture.debugElement – gewährt Zugriff auf Elemente
      ... (KLICK)
      
----

```typescript

it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
}));

it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
    .toContain('Welcome to app!');
}));
``` 

Note: Es macht ein Unterschied ob `changes` getriggert werden oder nicht.
      Kann deutlich komplexer werden:
      - Services (DI)
      - Asynchrones nach HTTP calls.
      
---

# Task 3 - Testing

* Erstelle eine TestSuite für die `CallForPapersComponent`
* Teste:
* * Komponente hat Button zum Registrieren
* * Komponente hat leere Tabelle
* * Komponente zeigt das Formular im "Registrier-Modus"
* * Nach dem Anlegen eines neuen Speakers gibt es genau einen Eintrag in der Tabelle

---

# Basics - Routing

Note: Nun wollen wir nicht nur eine Ansicht sehen oder uns durch Flags von einem Formular zum nächsten hangeln.

---

## Routing - Definition

```typescript
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  { path: 'heroes',component: HeroListComponent, data: {
      title: 'Heroes List'
  }},
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes],
  ...
})
export class AppModule { }
```
Note: - Definition von Routen
      - Kann auch in Konstante in separate Datei
      - Kann parameter in Routen haben
      - Kann direkt daten mit liefern
      - Wird von oben nach unten abgearbeitet – erste match gewinnt
      
---

## Routing - im Template

```angular2html
<router-outlet></router-outlet>
```

Note: Brauchen einen Container zum Darstellen

---

### Routing - Aufruf

```angular2html
<nav>
    <a routerLink="/crisis-center" routerLinkActive="active">
        Crisis Center
    </a>
    <a routerLink="/heroes" routerLinkActive="active">
        Heroes
    </a>
</nav>
```

Note: - extra Direktiven verfügbar
      - `routerLink` für die Route selbst
      - `routerLinkActive` setzt im aktiven Fall die gewünschte Klasse

---

# Task 4 - Routing

* Erstelle ein Komponente, die einen einzelnen Speaker darstellen soll – `SpeakerDashboardComponent`
* * auf der Route `speakers` wird die Liste der verfügbaren Speaker mit einem Link auf den Einzel-Speaker angezeigt.
* * Einzelspeaker erreichbar unter der Route `speaker/:id`
* * * Angedeutetes Profil mit Liste seiner Talks
* * * Formular zum hinzufügen eines Talks zu seine Liste
* die ursprüngliche Komponente ist jetzt unter `call-for-papers` erreichbar

---

# Basics - Dependency Injection

Note: Frage, warum haben wir hier zwei Listen von Speaker?
      Sollten, wir diese nicht in sync halte?
      Dann könnte man auch direkt aus der Liste des CfP dorthin verlinken
      Antwort: Speaker leben in einem eigenen Service, nennen wir ihn BackendService
      Wird in beide Komponenten rein gereicht.

---

## Dependency Injection

```typescript
import { Injectable } from '@angular/core';

import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() { return HEROES; }
}
```

Note: So könnte ein Service aussehen. 
      Wieder Beispiel aus der originalen Doku
      Wichtig: `@Injectable()`-Decorator – Klammern nicht vergessen
      Besser: ... 

---

## Dependency Injection

```typescript
import { Injectable } from '@angular/core';

import { HEROES }     from './mock-heroes';

const heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> { return heroesPromise; }
}
```

Note: Dann macht es später keinen Unterschied mehr, wenn wir den Service wirklich von einem Backend füttern.
      Die Komponente bekommt ein Promise und weiß damit umzugehen

---

## Dependency Injection

```typescript
import { Component }          from '@angular/core';

import { HeroService }        from './hero.service';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  template: `
  <h2>Heroes</h2>
  <hero-list></hero-list>
  `
})
export class HeroesComponent {
    constructor (private service: HeroService) {}
 }
```

Note: Sowohl NgModule als auch Komponente haben providers, denen ich meinen neuen Service übergeben kann.
      Doch wo ist der Unterschied?
      Die Provider gelten immer hierarchisch. D.h. beim NgModul immer für das ganze Modul und seine Komponenten.
      Bei der Komponente, nur für die Komponente selbst und die, die darin eingebettet sind.
      Kann ein lästiger Fehler sein :-)
      
---

# Task 5 - BackendService

- Erstelle einen `BackendService`, der sowohl Speaker als auch Talks vorhält
- Benutze den Service für:
* * Speakers Liste auf der CfP Seite
* * Speakers Liste auf der Speaker Seite
* * Speaker Profil und dessen Talk Liste

--- 

# Basics - Conclusion

Note: Wir sind nun in Windeseile durch die Grundzüg einer Angular App geflogen. Wir können nun:
      - Komponenten mit eigenen Templates erstellen und dort Daten darstellen
      - Grundzüge des Testens – Hier fehlt noch sehr viel mehr
      - Routing
      - Dependency Injection
      Mit den Mitteln, sollte man nun eigentlich schon sehr weit kommen. Wir gehen noch einen Schritt weiter ... (KLICK)
      
---

# Advanced

Note: Hier schauen wir uns an wie wir eigene Events zwischen Komponenten austauschen. Dazu wollen wir den
      tiefer in die Formulare einsteigen.
      
---

# Advanced - Events

Note: Wie halten wir Daten in sync? Wie Teilen wir mit, dass Komponente A einen Wert geändert hat, den Komponente B anzeigt?
      In solchen Beispiel-Listen wie wir es hier im Workshop machen läuft das einfach, da Javascript die Referenz auf Objekte behält, doch wie sonst?
      
---

## Events - Eine Idee
### MessageBus

Note: Eine Möglichkeit. Ist "nur" ein Service. Ein Service, der Messages bekommt, auf die sich jemand anders subscriben kann.

---

### MessageBus

```typescript
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
interface Message {channel: string; data: any;}
@Injectable()
export class MessageService {
    private subject = new Subject<Message>();

    public publish<T>(message: T): void {
        const channel = (<any>message.constructor).name;
        this.subject.next({ channel: channel, data: message });
    }
    public of<T>(messageType: { new(...args: any[]): T }): Observable<any> {
        const channel = (<any>messageType).name;
        return this.subject.filter(m => m.channel === channel).map(m => m.data);
    }
}
```

Note: Geht doch oder? Die haben wir in einem Projekt im Einsatz. Benutzt Streams von RxJs, auf die ich mich subscriben kann
      Ich kann das im aktuellen Projekt gerne mal zeigen, doch um von Komponente A zu Komponente B ein Event zu übermitteln
      ist das ein wenig oversized.
      
---

## Events - Inner Component

```typescript

import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
    selector: 'inner-component',
    template: '<h1>{{title}}</h1>'
})
export class InnerComponent {
    @Input() title: string = '';
}
```
Note: Das ist ert einmal noch kein Event, hier erstelle ich nur eine Komponente, die Daten von außen erwartet.

---

## Events -- Inner Component - Submit Event

```typescript

import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
    selector: 'inner-component',
    template: `
        <h1>{{title}}</h1>
        <p><button (click)="onClick()">Klick mich</button></p>
        `
})
export class InnerComponent {
    @Input() title: string = '';
    @output onClick: EventEmitter<void> = new EventEmitter();
    onClick() {
        this.onClick.emit();
    }
}
```

Note: Nun haben wir ein Event. Auf dem Klick geht es raus, doch wer fängt es?

---

## Events - Outer Component

```typescript

import {Component} from "@angular/core";
@Component({
    selector: 'outer-component',
    template: '<inner-component [title]="title"></inner-component>'
})
export class OuterComponent {
    title: string = 'Title';
    
    onInnerClick(): void {
        alert('Innen wurde gedrückt');
    }
}
```

Note: Hier sehen wir noch immer nicht wer das Event fängt und wie genau. Was wir aber sehen, ist, dass der Input gesetzt wird
      und zwar durch das sog. Property Binding.
      
---

## Events - Outer Component - Catching

```typescript

import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
        <outer-component (onClick)="onInnerClick()">
        </outer-component>`
})
export class AppComponent {
}
```

Note: So wie wir ein `(click)` auf einem Button oder einem Link fangen, fangen wir auch hier da Event auf dem
      Tag der äußeren Komponente und rufen deren Methode auf.
      Hier wollen wir mal nicht gleich eine Aufgabe dazu lösen, sondern machen das im nächsten Block zusammen mit den
      .... (KLICK) ...
      
---

# Advanced - Forms

Note: Wir haben ja schon eine Form der Formular in den ersten Tasks gesehen.

---

## Forms

```typescript
import {Component} from "@angular/core";
@Component({
    selector: 'app',
    template: `
        <form>
            <input
                type="text"
                [(ngModel)]="name"
                name="name"
                id="name" />
        </form>
    `
})
export class AppComponent {
    name: string = 'Max';
}
```

Note: Im Grund passieren hier zwei Sachen:
      - One-Way-Data-Binding von title auf den Value des Input Fields
      - (keyUp) als Event wird gefangen, um es auf die title Property zurück zu schreiben
      d.h. das FormsModule nimmt uns das komplette Binding ab
      macht Sinn, wenn wir Daten haben, die direkt zu unserem Formular passen
      Doch was ist, wenn wir die Daten von unserem Formular entkoppeln wolle? Wenn wir die Komponente ganz ohne den View testen wollen?
      
--- 

## Forms - Reactive Forms

Note: Neues Angular Module nötig `ReactiveFormsModule`. Damit haben wir dann die Kontrolle über unser Formular.

---

## Forms - Reactive Forms

```typescript
import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }        from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Note: Es lässt sich auch neben dem gewohnten FormsModule wählen.

---

## Forms - Reactive Forms - Template

```angular2html
<h2>Hero Detail</h2>
<h3><i>FormControl in a FormGroup</i></h3>
<form [formGroup]="heroForm" novalidate>
 <div class="form-group">
   <label class="center-block">Name:
     <input class="form-control" formControlName="name">
   </label>
 </div>
</form>
```

---

## Forms - Reactive Forms - Component

```typescript
import { Component }              from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.html'
})
export class HeroDetailComponent {
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) { this.createForm()}

  createForm() {
    this.heroForm = this.fb.group({name: ''});
  }
}
```

Note: Was habe ich nun davon? Es sieht erst mal mehr aus, aber
      - Formular ist nun über die Komponente erreichbar (per [formGroup] dem view zugewiesen)
      - Über einen Builder definiere ich Formular-Element -> weise diese dann durch `formControlName` zu

---

## Forms - Reactive Forms

```angular2html
<p>Form value: {{ heroForm.value | json }}</p>
<p>Form status: {{ heroForm.status | json }}</p>
```

Note: Das heißt aber auch die Werte leben im Formular Objekt selber und nicht mehr in einem Model
      - ich kann sie mir holen und dann losgelöst persisitieren
      - ich kann sie aber auch direkt validieren
      
---

## Forms - Reactive Forms - Docs lesen

Note: Ich gebe euch nun einfach einmal 10-15 Minuten um über die Docs dazu zu fliegen

---

# Task 6 - Reactive Forms und Events

* Ersetze Eingabe-Formular zum Anlegen eines Speakers durch ein `Reactive Form`
* Zerteile das Formular dazu in mehrere Komponenten
```angular2html
<speaker-form>
        <form>
                <speaker-name></speaker-name>
                <speaker-email></speaker-email>
                <speaker-buttons></speaker-buttons>
        </form>
</speaker-form>
```

---

# Conclusion

Note: Neben den Basics haben wir uns nun auch an ein paar advanced Features gewagt. Doch das ist noch nicht aller Tage Abend, 
      denn uns Fehlen noch immer ein paar Sachen, wie:
      - Pipes – was ist das eigentlich und wie baue ich die?
      - HTTP-Client
      - Generell Asynchrones mit RxJs
      
---

# Task 7 - Zusatz Aufgabe

* Erstelle eine Listenansicht für die Talks
* Erstelle ein Admin zum Annehmen und Disponieren von Talks
* Erstelle ein Dashboard in dem alle angenommen Talks in ihren Timeslots dargestellt werden

---

# Q&A - Eure Plattform-Application

---

# Links


* [RxJs](https://github.com/Reactive-Extensions/RxJS)
* [Jasmine](https://jasmine.github.io/2.0/introduction.html)
* [Reactive Forms](https://angular.io/guide/reactive-forms)
* [Reactive Forms on steroids](https://toddmotto.com/component-architecture-reactive-forms-angular)
