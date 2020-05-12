const array_insert_before = function(text, item, insert) {
  let index = undefined;
  for (var _i = 0, _len = item.length;_i < _len;_i++) {
    if (item[_i].text === text) {
      index = _i;
      break;
    }
  }
  item.splice(index, 0, insert);
  return item;
};
let menuItems = {
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
};
sails.config.globals.menuItems = array_insert_before('Task', sails.config.globals.menuItems, menuItems);
