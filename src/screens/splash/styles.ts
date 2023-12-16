import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight } from "common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  appNameTxt: {
    color: Colors.white,
    fontSize: 30,
    fontFamily: Fonts.semi_bold,
    letterSpacing: 2,
    marginTop: ScaleHeight(10),
  },
});

export default styles;
