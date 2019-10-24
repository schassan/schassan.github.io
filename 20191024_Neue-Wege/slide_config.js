var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Neue Wege der Digitalisierung <br>und Präsentation <br>von Handschriften', //<br>
    subtitle: '',
    eventInfo: {
      title: 'Werkstattgespräch',
      date: '24.10.2019'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/HAB_logo_tiny.png',
    fonts: [
      'Spectral:regular,semibold,italic,semibolditalic',
      'Roboto:regular,medium,italic,mediumitalic',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [
  {
    name: 'Christian Heitzmann',
    mail: 'heitzmann@hab.de'
  }, {
    name: 'Torsten Schaßan',
    mail: 'schassan@hab.de',
    orcid: '0000-0002-8902-4775',
    twitter: '@schassan',
    www: 'http://www.hab.de',
    github: 'http://github.com/schassan'
  } ]
};

