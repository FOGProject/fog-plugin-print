module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
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
