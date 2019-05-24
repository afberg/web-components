
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import GeoLoader from './GeoLoader';

storiesOf('atoms/GeoLoader', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(GeoLoader));
