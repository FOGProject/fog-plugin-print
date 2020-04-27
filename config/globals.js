module.exports.globals = {
  menuItems: [
    {
      text: 'Printer',
      plural: 'Printers',
      link: '/printers',
      icon: 'fa-print',
      subLinks: [
        {
          link: '/printers/create',
          text: 'Create New Printer'
        },
        {
          link: '/printers/export',
          text: 'Export Printers'
        },
        {
          link: '/printers/import',
          text: 'Import Printers',
        }
      ]
    }
  ]
};
