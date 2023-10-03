import { style } from "./style";

import React from "react";
import {
  View,
  Modal,
  SafeAreaView,
  Text,
  Image,
  Pressable,
} from "react-native";

// @svg and image
import { ArrowX } from "../../assets/svg";
import ImageRight from "../../assets/image/ImageRight.png";

// @components
import BoxInfo from "./components/BoxInfo";
import BoxNavigation from "./components/BoxNavigation";
import ButtonLogout from "./components/ButtonLogout";

const ModalHamburger = ({
  modalVisible = Boolean,
  setModalVisible = () => {},
}) => {
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={style.modalWrapper}>
        <View style={style.modalWrapperHeader}>
          <Pressable
            style={style.modalWrapperHeaderBox}
            onPress={() => setModalVisible(false)}
          >
            <ArrowX />
          </Pressable>
        </View>
        <View style={style.modalWrapperBody}>
          <View style={style.modalWrapperBodyLeft}>
            <BoxInfo name={"Pham Tuan"} email={"phamtuan@gmail.com"} />
            <BoxNavigation />
            <ButtonLogout />
          </View>
          <View style={style.modalWrapperBodyRight}>
            <View style={style.modalWrapperBodyRightBox}>
              <Image
                source={ImageRight}
                // style={{ flex: 1, height: undefined, width: undefined }}
                style={{
                  width: 300,
                  height: 711,
                  // aspectRatio: 16 / 9,
                  objectFit: "contain",
                }}
                // resizeMode={"contain"}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalHamburger;
