import { BaseController } from '@m2-modules/base-controller'
import { <%= uccModuleName %> } from '../entities'

export class <%= uccModuleName %>Controller extends BaseController<<%= uccModuleName %>> {
  constructor() {
    super(<%= uccModuleName %>)
  }
}
