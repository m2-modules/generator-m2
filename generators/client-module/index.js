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
        default: path.basename(process.cwd()),
      },
    ])

    this.answers.uccModuleName = _.upperFirst(
      _.camelCase(this.answers.moduleName)
    )

    this.answers.lccModuleName = _.lowerFirst(
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

    this.fs.move(
      this.destinationPath('src/components/CustomComponent.ts'),
      this.destinationPath(`src/components/${this.answers.uccModuleName}.ts`)
    )

    this.fs.move(
      this.destinationPath('src/interfaces/interface.ts'),
      this.destinationPath(`src/interfaces/I${this.answers.uccModuleName}.ts`)
    )

    this.fs.move(
      this.destinationPath('src/redux/actions/action.ts'),
      this.destinationPath(`src/redux/actions/${this.answers.lccModuleName}.ts`)
    )

    this.fs.move(
      this.destinationPath('src/redux/reducers/reducer.ts'),
      this.destinationPath(
        `src/redux/reducers/${this.answers.lccModuleName}.ts`
      )
    )
  }

  install() {
    /* Install 3rd party dependencies */
    this.yarnInstall(['lit-element', 'pwa-helpers'])
    /* Install m2-modules dependencies */
    this.yarnInstall(['@m2-modules/redux-manager'])
    /* Install Dev dependencies */
    this.yarnInstall(['ts-loader', 'typescript', 'webpack', 'webpack-cli'], {
      dev: true,
    })
  }
}
