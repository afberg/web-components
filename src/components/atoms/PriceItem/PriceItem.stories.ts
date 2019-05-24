
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import SlideItem from './SlideItem';

storiesOf('atoms/SlideItem', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(SlideItem));
