import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './react-components.scss';

/* eslint-disable-next-line */
interface ReactComponentsProps {}

const ReactComponents = (props: ReactComponentsProps) => {
  return (
    <div>
      <h1>Welcome to react-components!</h1>
    </div>
  );
};

export class XSearch extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<ReactComponents/>,  this);
  }
}
customElements.define('x-search', XSearch);

export default ReactComponents;
