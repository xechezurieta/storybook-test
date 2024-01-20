import type { Meta, StoryObj } from '@storybook/react';

import { ShadcnButton } from './shadcnButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ShadcnButton',
  component: ShadcnButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'boolean' },
    borderWidth: {
      options: ['border-0 (0px)', 'border (1px)', 'border-2 (2px)', 'border-4 (4px)', 'border-8 (8px)'],
      control: { type: 'select' }
    },
    borderRadius: { 
      options: ['rounded-none (0px)', 'rounded-sm (2px)' , 'rounded (4px)', 'rounded-md (6px)', 'rounded-lg (8px)', 'rounded-xl (12px)', 'rounded-2xl (16px)', 'rounded-3xl (24px)', 'rounded-full (9999px)'],
      control: { type: 'select' }
     },
    }
} satisfies Meta<typeof ShadcnButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    label: 'Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    label: 'Button',
    size: 'lg',
  },
};

export const Icon: Story = {
  args: {
    variant: 'default',
    label: 'Button',
    size: 'icon',
  },
};