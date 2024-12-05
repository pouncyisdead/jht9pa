import { Component, h, Prop } from '@stencil/core';
import { ComponentProps, generateComponentClasses } from '../../utils/component.utils';

@Component({
  tag: 'pc-example',
  styleUrl: 'pc-example.scss',
  shadow: true,
})
export class PcExample implements ComponentProps {
  @Prop() class?: string;
  @Prop() id?: string;

  render() {
    return (
      <div class={generateComponentClasses('pc-example', this)}>
        <slot></slot>
      </div>
    );
  }
}