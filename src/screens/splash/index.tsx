import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import ScreenNames from "navigation/ScreenNames";
import { ScreenContainer } from "components";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SvgLogo } from "assets/svg";

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ScreenNames.BottomTabs);
    }, 1000);
  }, []);

  return (
    <ScreenContainer style={styles.container} isDarkStatusBar={false}>
      <View style={{ alignItems: "center" }}>
        <SvgLogo />
        <Text style={styles.appNameTxt}>{t("appName")}</Text>
      </View>
    </ScreenContainer>
  );
};

export default SplashScreen;
