function componentTemplate(name) {
    return `
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('${camelToKebab(name)}')
export default class ${name} extends LitElement {
  @property( { type: String } ) heading = 'I am the ${name} component.';

  constructor() {
    super();
  }

  static get styles() {
    return css\`
      :host {
        display: block;
        background-color: var(--someColor, orange);
      }
    \`;
  }
  
  render() {
    return html\`
      <h2>\${this.heading}</h2>
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