import { Application } from '@hotwired/stimulus';

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application }; // eslint-disable-line import/prefer-default-export
