import {
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
  View,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "common";

interface IHeaderProps {
  sectionHeaderStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  title: string;
  subTitle: string;
  onSubTitlePress?: () => void;
}

const SectionHeader: React.FC<IHeaderProps> = ({
  sectionHeaderStyle,
  titleStyle,
  subTitleStyle,
  title,
  subTitle,
  onSubTitlePress,
}) => {
  return (
    <View style={[styles.sectionHeaderBox, sectionHeaderStyle]}>
      <Text style={[styles.titleTxt, titleStyle]}>{title}</Text>
      <TouchableOpacity
        style={styles.rowStart}
        activeOpacity={0.8}
        onPress={onSubTitlePress}
      >
        <Text style={[styles.subTitleTxt, subTitleStyle]}>{subTitle}</Text>
        <Icon
          name={I18nManager.isRTL ? "left" : "right"}
          color={Colors.primary}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SectionHeader);
