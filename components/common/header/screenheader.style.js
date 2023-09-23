import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    // backgroundColor: COLORS.white,
    // borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImage: (dimension) => ({
    width: dimension,
    height: dimension,
    // borderRadius: SIZES.small / 1.25,
    tintColor: COLORS.primary,
  }),
  logoContainer: {
    height:48,
    width: 200,
    display: "flex",
    flexDirection: "row",
  },
  logoImage: {
    width: 48,
    height: 48,
    marginLeft: -12,
    resizeMode: "contain",
  },
  logoText: {
    fontFamily: FONT.ssRegular,
    fontSize: 24,
    color: COLORS.white,
    letterSpacing: 2
  },
  rateDate: {
    color: COLORS.white,
    fontFamily: FONT.ssLight,
    fontSize: SIZES.medium - 2,
    letterSpacing: 0.75
  }
});

export default styles;
