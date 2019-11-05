import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from './redux/store'

class <%= uccMainComponent %> extends connect(store)(LitElement) {
  static get properties() {
    return {
      appName: String
    }
  }

  render() {
    return html`
      <h1>${this.appName}</h1>
    `
  }

  stateChanged(state) {
    this.appName = state.app.name
  }
}

customElements.define('<%= mainComponent %>', <%= uccMainComponent %>)
