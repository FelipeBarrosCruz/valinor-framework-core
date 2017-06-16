const Component = require('./src/component')

class ValinorCore {
  constructor () {
    this.Component = new Component(this)
  }
}

// const c = new ValinorCore()

// class UserRoute extends c.Component.Route {
//   constructor () {
//     super('appLoader', 'namespace')
//     super.build([{
//       url: '/test1',
//       controller: 'Controller',
//       validate: 'Validate'
//     }, {
//       url: '/test2',
//       controller: 'Controller',
//       validate: 'Validate'
//     }])
//   }
// }

// console.log("\n\n\n")
// console.log('CUZAO', c)
// console.log("\n\n\n")

// const u = new UserRoute()

// u.start().then((data) => {
//   console.log("\n\n\n")
//   console.log('CUZOM', data)
//   console.log("\n\n\n")
// })

module.exports = new ValinorCore()
