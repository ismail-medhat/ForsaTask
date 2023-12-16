import {
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { SvgHeart, SvgLogo, SvgNotification, SvgSearch } from "assets/svg";
import { ScaleWidth } from "common";
import SvgNote from "assets/svg/SvgNote";
import { useTranslation } from "react-i18next";

interface IHeaderProps {
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  onLikePress?: () => void;
  onNotifyPress?: () => void;
  onSearchPress?: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  headerStyle,
  titleStyle,
  title = "",
  onLikePress,
  onNotifyPress,
  onSearchPress,
}) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.headerBox, headerStyle]}>
      <View style={styles.rowbetween}>
        {title?.length == 0 ? (
          <Pressable onPress={onSearchPress}>
            <SvgSearch />
          </Pressable>
        ) : (
          <View />
        )}
        {title?.length == 0 ? (
          <SvgLogo />
        ) : (
          <Text style={[styles.titleTxt, titleStyle]}>{title}</Text>
        )}
        <View style={styles.rowStart}>
          <Pressable onPress={onLikePress}>
            <SvgHeart />
          </Pressable>
          <Pressable
            style={{ marginStart: ScaleWidth(8) }}
            onPress={onNotifyPress}
          >
            <SvgNotification />
          </Pressable>
        </View>
      </View>

      {title?.length == 0 && (
        <View style={[styles.rowStart, styles.cardBox]}>
          <SvgNote />
          <View>
            <Text style={styles.cardtxt}>{t("Get your limit")}</Text>
            <Text style={styles.cardSubtxt} numberOfLines={1}>
              {t("Complete your infoand get up to EGP 100,000")}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default React.memo(Header);
