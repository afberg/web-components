
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import SliderPicker from './SliderPicker';

storiesOf('organisms/SliderPicker', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(SliderPicker));
