import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  headerBox: {
    width: ScaleWidth("100%"),
    backgroundColor: Colors.primary,
    paddingVertical: ScaleHeight(20),
    paddingHorizontal: ScaleWidth(20),
    borderBottomLeftRadius: ScaleWidth(30),
    borderBottomRightRadius: ScaleWidth(30),
  },
  titleTxt: {
    fontSize: ScaleWidth(18),
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
  rowStart: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  rowbetween: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardtxt: {
    fontFamily: Fonts.medium,
    fontSize: ScaleWidth(14),
    color: Colors.yellow,
    marginStart: ScaleWidth(7),
    marginBottom: ScaleHeight(3),
  },
  cardSubtxt: {
    fontFamily: Fonts.regular,
    fontSize: ScaleWidth(12),
    color: Colors.yellow,
    marginStart: ScaleWidth(7),
  },
  cardBox: {
    borderWidth: ScaleWidth(1),
    borderColor: Colors.yellow,
    borderRadius: ScaleWidth(10),
    paddingVertical: ScaleWidth(5),
    paddingHorizontal: ScaleWidth(10),
    marginVertical: ScaleHeight(20),
  },
});
