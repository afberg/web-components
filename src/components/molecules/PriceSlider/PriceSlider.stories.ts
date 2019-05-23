
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import PriceSlider from './PriceSlider';

storiesOf('molecules/PriceSlider', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PriceSlider));
