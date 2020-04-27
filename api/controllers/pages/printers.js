module.exports = {
  friendlyName: 'Printers',
  description: 'Printers pages.',
  inputs: {
  },
  exits: {
    error: {
      responseType: 'serverError'
    },
    success: {
      viewTemplatePath: 'pages/list',
      description: 'Successful'
    }
  },
  fn: async function (inputs) {
    let req = this.req,
      res = this.res,
      printers = await Printer.find().populateAll();
    return {
      items: printers,
      header: 'Printer List',
      content: printers,
      title: 'Printer List'
    };
  }
};
