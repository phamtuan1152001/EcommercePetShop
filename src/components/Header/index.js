import { style } from "./style";

import React from "react";
import { Text, View, Image, Pressable } from "react-native";

// @svg and image
import { IconArrowDown, IconHamburgerMenu, IconGoBack } from "../../assets/svg";

// @components
import ModalHamburger from "../ModalHamburger";

const Header = ({ route, navigation = () => {} }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  // console.log("route", navigation);
  return (
    <View style={style.homeWrapperHeader}>
      {route === "Product" ? (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={style.homeWrapperHeaderLeft}>
            <IconGoBack />
          </View>
        </Pressable>
      ) : (
        <Pressable onPress={() => setModalVisible(true)}>
          <View style={style.homeWrapperHeaderLeft}>
            <IconHamburgerMenu />
          </View>
        </Pressable>
      )}
      <View style={style.homeWrapperHeaderCenter}>
        <View style={style.homeWrapperHeaderCenterTop}>
          <Text style={style.homeWrapperHeaderCenterTopTitle}>Delivery to</Text>
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
          source={require("../../assets/image/IconUser.png")}
          width={18}
          height={23}
        />
      </View>
      <ModalHamburger
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default Header;
