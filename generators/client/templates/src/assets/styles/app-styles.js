import { css } from 'lit-element'
import '../themes/app-themes.css'

export const layoutStyle = css`
  :host {
    flex: 1;
    display: grid;
    grid-template-areas: var(--app-grid-template-areas);
    grid-template-rows: var(--app-grid-template-rows);
    grid-template-columns: var(--app-grid-template-columns);
  }
  header {
    grid-area: header;
    background-color: ;
  }
  nav {
    grid-area: nav;
    background-color: blue;
  }
  main {
    grid-area: main;
    background-color: skyblue;
  }
  aside {
    grid-area: aside;
    background-color: darkblue;
  }
  footer {
    grid-area: footer;
    background-color: lightblue;
  }
`
