var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Usage of IIIF for digital facsimiles and digital editions at the HAB', //<br>
    subtitle: '',
    eventInfo: {
      title: 'Workshop „IIIF in/and Digital Scholarly Editions” &#x2014; Wien',
      date: '13.06.2023'
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
    name: 'Torsten Schaßan',
    mail: 'schassan@hab.de',
    orcid: '0000-0002-8902-4775',
    mastodon: 'https://fedihum.org/@schassan',
    www: 'http://www.hab.de',
    github: 'http://github.com/schassan'
  } ]
};

