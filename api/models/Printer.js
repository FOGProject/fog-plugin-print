module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    description: {
      type: 'string'
    },
    type: {
      type: 'string',
      required: true
    },
    vars: {
      type: 'json',
      required: true
    }
  }
}
