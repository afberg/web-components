
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import CarouselIndicator from './CarouselIndicator';
storiesOf('atoms/CarouselIndicator', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(CarouselIndicator));
