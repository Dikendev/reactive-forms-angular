import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {
  NgcCookieConsentService,
  NgcInitializationErrorEvent,
  NgcInitializingEvent,
  NgcNoCookieLawEvent,
  NgcStatusChangeEvent,
} from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    public title: Title,
    private cookieService: NgcCookieConsentService,
    private translateService: TranslateService
  ) {}

  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  ngOnInit(): void {
    // subscribe to cookieconsent observables to react to main events

    console.log('oiaodiasdasdasda');

    this.popupOpenSubscription = this.cookieService.popupOpen$.subscribe(
      (event) => {
        console.log(`initializing: ${JSON.stringify(event)}`);
        // you can use this.cookieService.getConfig() to do stuff...
      }
    );

    this.popupCloseSubscription = this.cookieService.popupClose$.subscribe(
      () => {
        console.log(`initializing: ${JSON.stringify(event)}`);
        // you can use this.cookieService.getConfig() to do stuff...
      }
    );

    this.initializingSubscription = this.cookieService.initializing$.subscribe(
      (event: NgcInitializingEvent) => {
        // the cookieconsent is initilializing... Not yet safe to call methods like `NgcCookieConsentService.hasAnswered()`
        console.log(`initializing: ${JSON.stringify(event)}`);
      }
    );

    this.initializedSubscription = this.cookieService.initialized$.subscribe(
      () => {
        // the cookieconsent has been successfully initialized.
        // It's now safe to use methods on NgcCookieConsentService that require it, like `hasAnswered()` for eg...
        console.log(`initialized: ${JSON.stringify(event)}`);
      }
    );

    this.initializationErrorSubscription =
      this.cookieService.initializationError$.subscribe(
        (event: NgcInitializationErrorEvent) => {
          // the cookieconsent has failed to initialize...
          console.log(
            `initializationError: ${JSON.stringify(event.error?.message)}`
          );
        }
      );

    this.statusChangeSubscription = this.cookieService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // you can use this.cookieService.getConfig() to do stuff...
      }
    );

    this.revokeChoiceSubscription = this.cookieService.revokeChoice$.subscribe(
      () => {
        // you can use this.cookieService.getConfig() to do stuff...
      }
    );

    this.noCookieLawSubscription = this.cookieService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.cookieService.getConfig() to do stuff...
      }
    );

    let content = this.cookieService.getConfig().content || {};

    this.translateService
      .get([
        'cookie.header',
        'cookie.message',
        'cookie.dismiss',
        'cookie.allow',
        'cookie.deny',
        'cookie.link',
        'cookie.policy',
      ])
      .subscribe((data) => {
        if (content) {
          content.header = data['cookie.header'];
          content.message = data['cookie.message'];
          content.dismiss = data['cookie.dismiss'];
          content.allow = data['cookie.allow'];
          content.deny = data['cookie.deny'];
          content.link = data['cookie.link'];
          content.policy = data['cookie.policy'];

          this.cookieService.destroy(); //remove previous cookie bar (with default messages)
          this.cookieService.init(this.cookieService.getConfig()); // update config with translated messages
        }
        // Override default messages with the translated ones
      });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
