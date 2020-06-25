import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  readonly VAPID_PUBLIC = 'BAgMf-FyRyN4nRYFbKlviIaX0ZzAjyIq5xjbzHRhMGkitBYAulUDxhYHF46c8m4nV7vR6Psa7aWjiIFQnGJX4hk';

  constructor(
    private swPush: SwPush,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

//   subscribeToNotifications() {
//     this.swPush.requestSubscription({ serverPublicKey: this.VAPID_PUBLIC })
//     .then(sub => console.log(sub))
//     .catch(err => console.error('Could not subscribe to notifications', err));
// }
}
