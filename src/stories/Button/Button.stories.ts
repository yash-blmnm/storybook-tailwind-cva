import type { Meta } from '@storybook/react';
import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> =  {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Medium = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export default meta;
