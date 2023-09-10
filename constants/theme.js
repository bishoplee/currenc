const COLORS = {
  primary: "#FCF9FA",
  secondary: "#CF4647",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  dark: "#000",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
  esRegular: "EncodeSansRegular",
  esLight: "EncodeSansLight",
  esXLight: "EncodeSansExtraLight",
  ssRegular: "SourceSansRegular",
  ssLight: "SourceSansLight"
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
