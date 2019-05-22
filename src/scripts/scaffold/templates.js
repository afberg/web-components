function componentTemplate(name) {
    return `
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('${camelToKebab(name)}')
export default class ${name} extends LitElement {

  static get styles() {
    return css\`
      :host {
        display: block;
        background-color: var(--someColor, orange);
      }
    \`;
  }
  
  @property()
  heading: String = 'I am the ${name} component.';

  constructor() {
    super();
  }

  render() {
    return html\`
      <h2>\${this.heading}</h2>
      <div>
        <slot></slot>
      </div>
    \`;
  }
}
`;
}

function storyTemplate(name, type) {
    return`
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import ${name} from './${name}';

storiesOf('${type}s/${name}', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(${name}));
`
}

function camelToKebab(camel){
    return camel.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

module.exports = {
    camelToKebab,
    story: storyTemplate,
    component: componentTemplate,
}