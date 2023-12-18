import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Header, ScreenContainer } from "components";
import { useTranslation } from "react-i18next";
import { Colors, Images, ScaleWidth } from "common";
import Icon from "react-native-vector-icons/AntDesign";
import * as Sharing from "expo-sharing";

const ProfileScreen: React.FC = () => {
  const { t } = useTranslation();

  const onSharePress = async () => {};

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Header title={t("Profile")} />
        <View style={{ padding: ScaleWidth(20) }}>
          <View style={[styles.rowStart, { marginBottom: 15 }]}>
            <Image source={Images.profileImg} style={styles.prifileImg} />
            <Text style={styles.userNameTxt}>{"Mohamed Adel"}</Text>
          </View>
          <TouchableOpacity onPress={onSharePress} activeOpacity={0.8}>
            <Text style={styles.userNameTxt}>{t("Share the app")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowBetween, { marginVertical: 10 }]}
            onPress={onSharePress}
            activeOpacity={0.8}
          >
            <Text style={styles.userNameTxt}>{t("Change Language")}</Text>
            <View style={styles.rowStart}>
              <Text style={[styles.userNameTxt, { paddingRight: 5 }]}>
                {"English"}
              </Text>
              <Icon name={"down"} color={Colors.primary} size={18} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default ProfileScreen;
