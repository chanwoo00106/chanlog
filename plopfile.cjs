const componentConfig = require('./generators/component')

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
function Config(plop) {
  plop.setGenerator('component', componentConfig)
}

module.exports = Config
