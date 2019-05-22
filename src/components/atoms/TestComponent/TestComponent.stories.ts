
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import TestComponent from './TestComponent';

storiesOf('atoms/TestComponent', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(TestComponent));
