import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Header, ScreenContainer } from "components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const RetailScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Header title={t("Retail")} />
      </View>
    </ScreenContainer>
  );
};

export default RetailScreen;
