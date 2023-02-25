import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, info, neutral, success, warning } from "./colors";
import { getPrimary } from "./utils";

export const createPalette = (config) => {
  const { colorPreset, contrast } = config;

  return {
    action: {
      active: neutral[400],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: contrast === "high" ? "#111111" : "#111111",
      paper: "#111111",
    },
    divider: "#111111",
    error,
    info,
    mode: "dark",
    neutral,
    primary: getPrimary(colorPreset),
    success,
    text: {
      primary: neutral[100],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
  };
};
