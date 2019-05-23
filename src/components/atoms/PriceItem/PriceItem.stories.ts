
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import PriceItem from './PriceItem';

storiesOf('atoms/PriceItem', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PriceItem));
