import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sectorBox: {
    marginEnd: ScaleWidth(10),
    padding: ScaleWidth(5),
    borderRadius: ScaleWidth(5),
  },
  sectorTxt: {
    fontSize: ScaleWidth(16),
    fontWeight: "400",
  },
  brandBox: {
    marginEnd: ScaleWidth(10),
    borderWidth: ScaleWidth(1),
    padding: ScaleWidth(5),
    borderColor: Colors.gray3,
    borderRadius: ScaleWidth(5),
  },
  brandTxt: {
    fontSize: ScaleWidth(16),
    color: Colors.red,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  serviceBox: {
    width: ScaleWidth("42%"),
    height: ScaleHeight("10%"),
    alignItems: "center",
    justifyContent: "center",
    padding: ScaleWidth(5),
    borderRadius: ScaleWidth(5),
    backgroundColor: Colors.scondary,
    marginVertical: ScaleHeight(5),
  },
  serviceTxt: {
    fontSize: ScaleWidth(16),
    fontWeight: "600",
    color: Colors.white,
  },
});

export default styles;
