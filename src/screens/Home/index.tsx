import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import styles from "./styles";
import { Header, ScreenContainer, SectionHeader } from "components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "store";
import { Colors, Images, ScaleHeight, ScaleWidth } from "common";
import Axios from "services/axiosInstance";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import Toast from "react-native-toast-message";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [storeLoading, setStoreLoading] = useState<boolean>(false);
  const [storeBrands, setStoreBrands] = useState<any>([]);
  const [serviceTypes, setServiceTypes] = useState<any>([]);
  const [storeSectors, setStoreSectors] = useState<any>([]);
  const [storeOffers, setStoreOffers] = useState<any>([]);
  const [offfersLikeIds, setOfffersLikeIds] = useState<any>([]);
  const [sectorId, setSectorId] = useState<number | string>(-1);

  const onLikePress = (id) => {
    const likeIdIndex = offfersLikeIds.findIndex((likeId) => likeId === id);
    if (likeIdIndex !== -1) {
      setOfffersLikeIds(offfersLikeIds.filter((id) => id != id));
      Toast.show({
        type: "success",
        text1: "Offer disliked successfully",
      });
    } else {
      let updatedLikeIds = [...offfersLikeIds];
      updatedLikeIds.push(id);
      setOfffersLikeIds(updatedLikeIds);
      Toast.show({
        type: "success",
        text1: "Offer liked successfully",
      });
    }
  };

  const checkOffersLike = (id) => {
    const likeIdIndex = offfersLikeIds.findIndex((likeId) => likeId === id);
    if (likeIdIndex !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const getStoreSectors = async () => {
    setStoreLoading(true);
    try {
      const res = await Axios({
        method: "GET",
        path: "storeSectors",
      });
      // console.log("store sectors :: " + JSON.stringify(res?.data?.results[0]));
      setStoreSectors(res?.data?.results);
      setStoreLoading(false);
    } catch (error) {
      console.log("storeSectors error: " + JSON.stringify(error));
      setStoreLoading(false);
    }
  };

  const getStoreBrands = async () => {
    setStoreLoading(true);
    try {
      const res = await Axios({
        method: "GET",
        path: "storeSectorBrands",
        pathParams: sectorId == -1 ? "" : `?sector=${sectorId}`,
      });
      // console.log("store brands :: " + JSON.stringify(res?.data?.results[0]));
      setStoreBrands(res?.data?.results);
      setStoreLoading(false);
    } catch (error) {
      console.log("storeSectorBrands error: " + JSON.stringify(error));
      setStoreLoading(false);
    }
  };

  const getStoreServiceType = async () => {
    setStoreLoading(true);
    try {
      const res = await Axios({
        method: "GET",
        path: "additionalLoans",
      });
      // console.log(
      //   "additionalLoans :: " + JSON.stringify(res?.data?.results[0])
      // );
      setServiceTypes(res?.data?.results);
      setStoreLoading(false);
    } catch (error) {
      console.log("additionalLoans error: " + JSON.stringify(error));
      setStoreLoading(false);
    }
  };

  const getStoreOffers = async () => {
    setStoreLoading(true);
    try {
      const res = await Axios({
        method: "GET",
        path: "storeOffers",
      });
      // console.log("storeOffers :: " + JSON.stringify(res?.data?.results[0]));
      setStoreOffers(res?.data?.results);
      setStoreLoading(false);
    } catch (error) {
      console.log("storeOffers error: " + JSON.stringify(error));
      setStoreLoading(false);
    }
  };

  useEffect(() => {
    getStoreSectors();
    getStoreServiceType();
    getStoreOffers();
  }, []);

  useEffect(() => {
    getStoreBrands();
  }, [sectorId]);

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          {storeLoading ? (
            <ActivityIndicator size={"large"} color={Colors.primary} />
          ) : (
            <View>
              <SectionHeader
                title={t("Top brands in retail")}
                subTitle={t("See All")}
              />
              <View style={{ marginBottom: ScaleHeight(20) }}>
                {storeSectors && (
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingStart: ScaleWidth(20),
                      paddingEnd: ScaleWidth(10),
                    }}
                    horizontal
                    data={storeSectors}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => setSectorId(item?.value)}
                          activeOpacity={0.7}
                          style={[
                            styles.sectorBox,
                            {
                              backgroundColor:
                                sectorId == item?.value
                                  ? Colors.scondary
                                  : Colors.lightGray,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.sectorTxt,
                              {
                                color:
                                  sectorId == item?.value
                                    ? Colors.white
                                    : Colors.primary,
                              },
                            ]}
                          >
                            {item?.label}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                    ListHeaderComponent={
                      <TouchableOpacity
                        onPress={() => setSectorId(-1)}
                        activeOpacity={0.7}
                        style={[
                          styles.sectorBox,
                          {
                            backgroundColor:
                              sectorId == -1 ? Colors.scondary : "trasparent",
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.sectorTxt,
                            {
                              color:
                                sectorId == -1 ? Colors.white : Colors.primary,
                            },
                          ]}
                        >
                          {"All"}
                        </Text>
                      </TouchableOpacity>
                    }
                  />
                )}
              </View>

              <View style={{}}>
                {storeBrands && (
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingStart: ScaleWidth(20),
                      paddingEnd: ScaleWidth(10),
                    }}
                    horizontal
                    data={storeBrands}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View style={styles.brandBox}>
                          <Text style={styles.brandTxt}>
                            {item?.sector.title_en}
                          </Text>
                        </View>
                      );
                    }}
                  />
                )}
              </View>

              <SectionHeader
                title={t("Requset Additional Loan")}
                subTitle={t("See Less")}
              />

              <View>
                {serviceTypes && (
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.rowWrap}
                    data={serviceTypes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {}}
                          activeOpacity={0.7}
                          style={styles.serviceBox}
                        >
                          <Text style={styles.serviceTxt}>{item?.name}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                )}
              </View>

              <SectionHeader
                title={t("Offers Select for you")}
                subTitle={t("See All")}
              />

              <View>
                {storeOffers && (
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.rowWrap}
                    data={storeOffers}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {}}
                          activeOpacity={0.9}
                          style={styles.offersBox}
                        >
                          <TouchableOpacity
                            onPress={() => onLikePress(item?.id)}
                            activeOpacity={0.9}
                            style={styles.likeBox}
                          >
                            <Icon
                              name={
                                checkOffersLike(item?.id) ? "heart" : "hearto"
                              }
                              color={
                                checkOffersLike(item?.id)
                                  ? Colors.red
                                  : Colors.white
                              }
                              size={18}
                            />
                          </TouchableOpacity>
                          <View style={styles.offerImgBox}>
                            <Image
                              source={
                                item?.thumbnail
                                  ? { uri: item?.thumbnail }
                                  : Images.sportShose
                              }
                              resizeMode={"cover"}
                              style={styles.offerImgBox}
                            />
                          </View>

                          <View style={styles.offerBottomBox}>
                            <Text style={styles.offerTxt}>
                              {item?.brand?.sector?.title}
                            </Text>
                            <Text style={styles.offerTxt} numberOfLines={4}>
                              {item?.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
