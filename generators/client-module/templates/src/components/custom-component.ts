import { store } from '@m2fw/redux-manager'
import { customElement, html, LitElement, property } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'

@customElement('custom-component')
export class <%= uccModuleName %> extends connect(store)(LitElement) {
  @property({ type: Array }) pages: []

  render() {
    return html`
      <h2><%= uccModuleName %></h2>
    `
  }

  stateChanged(state: any) {
    console.log('<%= uccModuleName %> State Changed', state)
  }
}
