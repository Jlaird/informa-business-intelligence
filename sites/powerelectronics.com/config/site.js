const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e98905aa56bf2c43fc3c',
  },
  homePageSections: [
    { alias: 'technologies/power-management', name: 'Power Management' },
    { alias: 'technologies/alternative-energy', name: 'Alternative Energy' },
    { alias: 'markets/automotive', name: 'Automotive' },
  ],
  logos: {
    navbar: {
      src: 'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=30',
      srcset: [
        'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=45',
      srcset: [
        'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/powerelectronicstech/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PowerElecTech', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'powertech.home' },
  gtm: {
    containerId: 'GTM-MKCRX6P',
  },
  gcse: {
    id: '003355913687346718228:3ijfg6nawr7',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
