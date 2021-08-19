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
          'server'
        )}`
      )
    )
    this.answers = await this.prompt([
      {
        name: 'appName',
        message: 'What is your application name?',
        default: 'Application Name',
      },
      {
        name: 'moduleName',
        message: 'What is your module name?',
        default: path.basename(process.cwd()),
      },
      {
        name: 'runningPort',
        message: 'Running port for server',
        default: 8080,
      },
    ])
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
    this.yarnInstall([
      '@m2-modules/base-controller',
      '@m2-modules/datasource',
      '@m2-modules/graphql-manager',
      '@m2-modules/menu',
      'body-parser',
      'express',
      'reflect-metadata',
      'sqlite3',
      'typeorm',
    ])

    this.yarnInstall(['@types/express', 'ts-node', 'typescript', 'nodemon'], {
      dev: true,
    })
  }
}
