const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://designmanufacturing.informa.com/industryweek/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/talent', label: 'Talent' },
        { href: '/technology-and-iiot', label: 'Technology & IIoT' },
        { href: '/operations', label: 'Operations' },
        { href: '/leadership', label: 'Leadership' },
        { href: '/supply-chain', label: 'Supply Chain' },
        { href: '/the-economy', label: 'The Economy' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'http://directory.newequipment.com/', label: 'Manufacturing Products' },
        { href: '/resources/industryweek-best-plants-awards', label: 'IndustryWeek Best Plants Awards' },
        { href: '/resources/industryweek-50-best-us-manufacturers', label: 'IW US 50 Best' },
        { href: '/resources/industryweek-us-500', label: 'IW US 500' },
        { href: '/supply-chain-initiative', label: 'Supply Chain Initiative' },
        { href: '/trump-and-manufacturing', label: 'Trump and Manufacturing' },
        { href: '/resources/iw-best-practices-reports', label: 'IW Best Practices Reports' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://manufacturing.endeavorb2b.com/industryweek', label: 'Advertise', target: '_blank' },
        { href: '/page/industryweek-contributors-guidelines', label: 'Contributors’ Guidelines' },
        { href: 'https://designmanufacturing.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
