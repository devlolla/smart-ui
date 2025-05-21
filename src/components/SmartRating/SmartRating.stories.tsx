import React from "react";
import SmartRating from "./SmartRating";
import type { SmartRatingProps } from "./SmartRating.types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SmartRating> = {
  title: "Components/SmartRating",
  component: SmartRating,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    theme: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof SmartRating>;

export const Default: Story = {
  args: {
    title: "Avalie este produto",
    theme: "primary", // ou "primary", conforme seu estilo
    disabled: false,
    testIdPrefix: "star",
  },
};

export const Disabled: Story = {
  args: {
    title: "Avaliação desativada",
    theme: "primary",
    disabled: true,
    testIdPrefix: "disabled",
  },
};
