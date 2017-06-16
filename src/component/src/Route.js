class Route {
  constructor (AppLoader, namespace) {
    this.appLoader = AppLoader
    this.namespace = namespace
    this.data = []
  }

  build (options) {
    if (Array.isArray(options)) return options.map(value => this.build(value))
    this.data.push(options)
    return this
  }

  start () {
    return new Promise((resolve, reject) => {
      return resolve(this.data)
    })
  }
}

module.exports = Route
