import { style } from "../style";

import React, { useState } from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";

// @image and icon
import { IconHamburgerMenu, IconArrowDown } from "../assets/svg";

// @constant
import { listType, list } from "../configs/constant";

// @components
import TypeItem from "../Components/TypeItem";
import ProductItem from "../Components/ProductItem";
import Navigation from "../../../components/Navigation";

const Homepage = ({ navigation, route }) => {
  const [activeType, setActiveType] = useState(0);
  // console.log("listProducts", route.name);

  return (
    <View style={style.homeWrapper}>
      <View style={style.homeWrapperHeader}>
        <View style={style.homeWrapperHeaderLeft}>
          <IconHamburgerMenu />
        </View>
        <View style={style.homeWrapperHeaderCenter}>
          <View style={style.homeWrapperHeaderCenterTop}>
            <Text style={style.homeWrapperHeaderCenterTopTitle}>
              Delivery to
            </Text>
            <View style={style.homeWrapperHeaderCenterTopIcon}>
              <IconArrowDown />
            </View>
          </View>
          <Text style={style.homeWrapperHeaderCenterBottom}>
            lekki phase 1, Estate
          </Text>
        </View>
        <View style={style.homeWrapperHeaderRight}>
          <Image
            source={require("../assets/image/IconUser1.png")}
            width={18}
            height={23}
          />
        </View>
      </View>
      <ScrollView style={style.homeWrapperBody}>
        <View style={style.homeWrapperBodyHeader}>
          <Text style={style.homeWrapperBodyHeaderTitle}>
            Enjoy Delicious food
          </Text>
          <ScrollView
            contentContainerStyle={style.homeWrapperBodyHeaderType}
            horizontal={true}
          >
            {listType.map((item, index) => {
              return (
                <View key={index}>
                  <TypeItem
                    id={index}
                    name={item.name}
                    image={item.image}
                    color={item.color}
                    cover={item.cover}
                    activeType={activeType}
                    handleActiveType={setActiveType}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={style.homeWrapperBodyContent}>
          <View style={style.homeWrapperBodyContentTop}>
            <Text style={style.homeWrapperBodyContentTopLeft}>
              Popular restaurants
            </Text>
            <Text style={style.homeWrapperBodyContentTopRight}>
              View all(29)
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={style.homeWrapperBodyContentBottom}
            horizontal={true}
          >
            {list?.map((item, index) => {
              return (
                <View key={index} style={style.homeWrapperBodyContentBottomBox}>
                  <ProductItem item={item} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={style.homeWrapperBodyContent}>
          <View style={style.homeWrapperBodyContentTop}>
            <Text style={style.homeWrapperBodyContentTopLeft}>
              Popular restaurants
            </Text>
            <Text style={style.homeWrapperBodyContentTopRight}>
              View all(29)
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={style.homeWrapperBodyContentBottom}
            horizontal={true}
          >
            {list?.map((item, index) => {
              return (
                <View key={index} style={style.homeWrapperBodyContentBottomBox}>
                  <ProductItem item={item} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={style.homeWrapperBodyContent}>
          <View style={style.homeWrapperBodyContentTop}>
            <Text style={style.homeWrapperBodyContentTopLeft}>
              Popular restaurants
            </Text>
            <Text style={style.homeWrapperBodyContentTopRight}>
              View all(29)
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={style.homeWrapperBodyContentBottom}
            horizontal={true}
          >
            {list?.map((item, index) => {
              return (
                <View key={index} style={style.homeWrapperBodyContentBottomBox}>
                  <ProductItem item={item} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 20 }} />
      <Navigation navigation={navigation} route={route} />
    </View>
  );
};

export default Homepage;
