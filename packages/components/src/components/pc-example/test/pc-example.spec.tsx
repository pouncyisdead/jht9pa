import { newSpecPage } from '@stencil/core/testing';
import { PcExample } from '../pc-example';

describe('pc-example', () => {
  it('renders with default class', async () => {
    const page = await newSpecPage({
      components: [PcExample],
      html: `<pc-example></pc-example>`,
    });
    const element = page.root.shadowRoot.querySelector('.pc-example');
    expect(element).toBeTruthy();
  });

  it('renders with custom class', async () => {
    const page = await newSpecPage({
      components: [PcExample],
      html: `<pc-example class="custom-class"></pc-example>`,
    });
    const element = page.root.shadowRoot.querySelector('.pc-example.custom-class');
    expect(element).toBeTruthy();
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [PcExample],
      html: `<pc-example><p>Test content</p></pc-example>`,
    });
    const slotContent = page.root.innerHTML;
    expect(slotContent).toContain('Test content');
  });
});