import { BaseController } from '@m2fw/base-controller'
import { <%= uccModuleName %> } from '../entities'

export class <%= uccModuleName %>Controller extends BaseController<<%= uccModuleName %>> {
  constructor() {
    super(<%= uccModuleName %>)
  }
}
