import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Header, ScreenContainer, SectionHeader } from "components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Header />
        <SectionHeader
          title={t("Top brands in retail")}
          subTitle={t("See All")}
        />
        <SectionHeader
          title={t("Requset Additional Loan")}
          subTitle={t("See Less")}
        />
        <SectionHeader
          title={t("Offers Select for you")}
          subTitle={t("See All")}
        />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
