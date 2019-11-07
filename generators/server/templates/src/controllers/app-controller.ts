import packageJson from '../../package.json'

export default class AppController {
  static get appName() {
    return packageJson.name
  }

  static get appVersion() {
    return packageJson.version
  }
}
