import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Image, ImageProps } from '.';

export default {
  title: 'Components/Image',
  component: Image,
  parameters: {
    componentSubtitle: 'Image Component',
  },
} as Meta;

export const Default: Story<ImageProps> = () => (
  <Image src="/static/v1/img/placeholder.png" />
);

export const Responsive: Story<ImageProps> = () => (
  <Image src="/static/v1/img/placeholder.png" responsive />
);

export const Styled: Story<ImageProps> = () => (
  <Image src="/static/v1/img/placeholder.png" height="300px" />
);

export const StyledResponsive: Story<ImageProps> = () => (
  <Image src="/static/v1/img/placeholder.png" height="420px" responsive />
);
