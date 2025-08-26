const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#1ebb94ff",
  primary_bowl: "#2bca95ff",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyExtraLight: "#F5F5F7",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
} as const;

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
} as const;

const fonts = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  P0: "15px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
  P7: "90px",
} as const;
const gridUnit = 8;
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
} as const;
const shadows = {
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  medium: "0px -2px 8px -2px rgb(0 0 0 / 20%",
  soft: "0 -2px 8px -2px rgb(0 0 0 / 10%",
} as const;
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
} as const;

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  weights,
  spacing,
};
