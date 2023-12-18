import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  sectionHeaderBox: {
    width: ScaleWidth("100%"),
    backgroundColor: "transparent",
    paddingVertical: ScaleHeight(20),
    paddingHorizontal: ScaleWidth(20),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rowStart: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  titleTxt: {
    fontSize: ScaleWidth(16),
    color: Colors.primary,
    fontWeight: "800",
  },
  subTitleTxt: {
    fontSize: ScaleWidth(14),
    color: Colors.primary,
    fontWeight: "600",
    paddingRight: ScaleWidth(3),
  },
});
