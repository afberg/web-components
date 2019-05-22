import { configure } from '@storybook/polymer';
import '@storybook/addon-console';

const req = require.context('../src', true, /\.stories\.(j|t)s$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
require('@styles/global.css');
configure(loadStories, module);
