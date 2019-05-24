
import { storiesOf, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import TripConfigurator from './TripConfigurator';

storiesOf('templates/TripConfigurator', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(TripConfigurator));
