
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import SnapSlider from './SnapSlider';

storiesOf('molecules/SnapSlider', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(SnapSlider));
