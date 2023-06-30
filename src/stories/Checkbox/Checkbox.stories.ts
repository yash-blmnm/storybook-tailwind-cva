import type { Meta } from '@storybook/react';
import { Checkbox } from ".";
import { CheckedStatus } from './type';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: "Example/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Checked = {
  args: {
    checkedStatus: "checked",
    label: "Click me",
  },
};

export const Neutral = {
    args: {
      checkedStatus: CheckedStatus.NEUTRAL,
      label: "Click me",
    },
  };

export default meta;