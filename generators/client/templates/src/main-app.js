import { store } from '@m2fw/redux-manager'
import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { layoutStyle } from './assets/styles/app-styles'

class <%= uccMainComponent %> extends connect(store)(LitElement) {
  static get styles() {
    return [layoutStyle]
  }

  static get properties() {
    return {
      appName: String
    }
  }

  render() {
    return html`
      <header>
        <h1>${this.appName}</h1>
      </header>
      <nav></nav>
      <main></main>
      <aside></aside>
      <footer></footer>
    `
  }

  stateChanged(state) {
    this.appName = state.app.name
  }
}

customElements.define('<%= mainComponent %>', <%= uccMainComponent %>)
