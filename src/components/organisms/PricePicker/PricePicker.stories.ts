
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import PricePicker from './PricePicker';

storiesOf('organisms/PricePicker', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PricePicker));
