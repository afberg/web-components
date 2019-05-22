import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import FlySite from './fly-site';

import readme from '../README.md';

storiesOf('fly-site', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(FlySite), { notes: { markdown: readme } });