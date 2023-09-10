import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    position: "absolute",
    top: "50%",
    marginTop: -45,
    left: "50%",
    marginLeft: -45,
    backgroundColor: COLORS.primary,
    borderWidth: 5,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.medium * 8,
    ...SHADOWS.medium,
    // shadowColor: COLORS.secondary,
  },
  btnConverter: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium * 8,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
