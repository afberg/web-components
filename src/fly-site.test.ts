import { html, fixture, expect } from '@open-wc/testing';

import './fly-site.js';

describe('<fly-site>', () => {
  it('has a default property heading', async () => {
    const el = await fixture('<fly-site></fly-site>');

    expect(el.heading).to.equal('Hello world!');
  });

  it('allows property heading to be overwritten', async () => {
    const el = await fixture(html`
      <fly-site heading="different heading"></fly-site>
    `);

    expect(el.heading).to.equal('different heading');
  });
});
