const Generator = require('yeoman-generator')
const yosay = require('yosay')
const chalk = require('chalk')
const path = require('path')
const _ = require('lodash')

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay(
        `Welcome to ${chalk.blue('M2 framework generator')} for ${chalk.red(
          'Client module'
        )}`
      )
    )
    this.answers = await this.prompt([
      {
        name: 'moduleName',
        message: 'What is your module name?',
        default: path.basename(process.cwd())
      }
    ])

    this.answers.uccModuleName = _.upperFirst(
      _.camelCase(this.answers.moduleName)
    )
  }

  writing() {
    this.fs.copyTpl(
      [this.templatePath() + '/**/*'],
      this.destinationPath(),
      this.answers,
      {},
      { globOptions: { dot: true } }
    )
  }

  install() {
    /* Install 3rd party dependencies */
    this.yarnInstall(['lit-element', 'pwa-helpers'])
    /* Install M2FW dependencies */
    this.yarnInstall(['@m2fw/redux-manager'])
    /* Install Dev dependencies */
    this.yarnInstall(['ts-loader', 'typescript', 'webpack', 'webpack-cli'], {
      dev: true
    })
  }
}
