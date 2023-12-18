import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prifileImg: {
    width: ScaleWidth(60),
    height: ScaleWidth(60),
    borderRadius: ScaleWidth(10),
    marginEnd: ScaleWidth(10),
  },
  userNameTxt: {
    fontSize: ScaleWidth(18),
    fontWeight: "600",
    color: Colors.primary,
  },
});

export default styles;
