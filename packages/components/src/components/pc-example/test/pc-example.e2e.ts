import { newE2EPage } from '@stencil/core/testing';

describe('pc-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pc-example></pc-example>');

    const element = await page.find('pc-example');
    expect(element).toBeTruthy();
  });
});