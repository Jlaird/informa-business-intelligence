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
      { href: 'https://power.informa.com/', label: 'Advertise', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/careers', label: 'Careers' },
        { href: '/disaster-response', label: 'Disaster Response' },
        { href: '/distributed-energy-resources', label: 'Distributed Energy Resources' },
        { href: '/electric-utility-operations', label: 'Electric Utility Operations' },
        { href: '/electrification', label: 'Electrification' },
        { href: '/grid-innovations', label: 'Grid Innovations' },
        { href: '/intelligent-undergrounding', label: 'Intelligent Undergrounding' },
        { href: '/overhead-distribution', label: 'Overhead Distribution' },
        { href: '/overhead-transmission', label: 'Overhead Transmission' },
        { href: '/renewables', label: 'Renewables' },
        { href: '/safety-and-training', label: 'Safety and Training' },
        { href: '/smart-utility', label: 'Smart Utility' },
        { href: '/substations', label: 'Substations' },
        { href: '/test-and-measurement', label: 'Test and Measurement' },
        { href: '/transmission-reliability', label: 'Transmission Reliability' },
        { href: '/utility-business', label: 'Utility Business' },
        { href: '/vegetation-management', label: 'Vegetation Management' },
        { href: '/wildfire', label: 'Wildfire' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'https://jobs.tdworld.com', label: 'Job Center', target: '_blank' },
        { href: '/td-how', label: 'T&D HOW' },
        { href: '/resources/webinars', label: 'Webinars' },
        { href: '/resources/white-papers', label: 'White Papers' },
        { href: '/td-world-magazine-0', label: 'Magazine Archive' },
        { href: '/directory', label: 'Online Buyers\' Guide' },
        { href: '/page/utility-business/td-world-executive-insights-board', label: 'Executive Insights Board' },
        { href: '/page/td-world-media-partners', label: 'Media Partners' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://energy.endeavorb2b.com/tdworld', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
