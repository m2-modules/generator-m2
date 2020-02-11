import { store } from '@m2fw/redux-manager'
import { html, LitElement, property, customElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { layoutStyle } from './assets/styles/app-styles'

@customElement('<%= mainComponent %>')
export class <%= uccMainComponent %> extends connect(store)(LitElement) {
  @property({ type: String }) appName: string

  static get styles() {
    return [layoutStyle]
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

  stateChanged(state: any) {
    this.appName = state.app.name
  }
}