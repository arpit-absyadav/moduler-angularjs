import template from './app.nav.html';
import styles from './app-nav.component.scss';

export const AppNavComponent = {
  selector: 'appNav',
  bindings: {
    user: '<',
    onLogout: '&',
    buttonTitle: '@'
  },
  template: `${template}`,
  styles,
  // template has to pass as string litral.
  controller: class AppNavComponent {
    constructor(EventEmitter) {
      'ngInject';

      this.EventEmitter = EventEmitter;
    }

    $onInit() {
      console.log('>>>One way data flow', this.user);
      this.user = Object.assign({}, this.user);
    }

    logoutUser() {
      this.onLogout(
        this.EventEmitter({
          userEmail: this.user.email
        })
      );
    }
  }
};
