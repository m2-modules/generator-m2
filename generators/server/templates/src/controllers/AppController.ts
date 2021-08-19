import { BaseController } from '@m2-modules/base-controller'
import packageJson from '../../package.json'
import { App } from '../entities'

export class AppController extends BaseController<App> {
  constructor() {
    super(App)
  }

  static get appName() {
    return packageJson.name
  }

  static get appVersion() {
    return packageJson.version
  }
}
