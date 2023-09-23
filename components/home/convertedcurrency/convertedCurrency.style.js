import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  currecyValueWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "30%"
  },
  currencyValue: {
    fontFamily: FONT.esXLight,
    fontSize: 56,
    color: COLORS.secondary
  },
  currencyShortName: {
    fontSize: 13,
    fontFamily: FONT.esLight,
    color: COLORS.secondary,
    letterSpacing: 1
  },
  conversionInfo: {
    fontFamily: FONT.esRegular,
    fontSize: 13,
    color: COLORS.gray,
    letterSpacing: 2,
    position: "absolute",
    bottom: 72
  },
  currencyName: {
    fontFamily: FONT.esLight,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    letterSpacing: 1
  },
  currencyNamePickerWrapper: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "70%",
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    position: "absolute",
    bottom: 16,
  },
  caret: {
    width: 6,
    height: 6,
    borderRightWidth: 2,
    borderRightColor: COLORS.secondary,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
    position: "absolute",
    right: 24,
    transform: [{rotate: '45deg'}]
  }
});

export default styles;
