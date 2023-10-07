import { style } from "../style";

import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// @img and svg
import BtnNumber from "../assets/image/BtnNumber.png";
import IconStart from "../assets/image/IconStart.png";
import IconClock from "../assets/image/IconClock.png";
import IconFire from "../assets/image/IconFire.png";
import MeatSau from "../assets/image/MeatSau.png";
import Cheese from "../assets/image/Cheese.png";
import RegularBun from "../assets/image/RegularBun.png";

// @components
import ToppingItem from "../Components/ToppingItem";

const listTopping = [
  {
    id: 1,
    name: "Regular Bun",
    image: RegularBun,
  },
  {
    id: 2,
    name: "Cheese",
    image: Cheese,
  },
  {
    id: 3,
    name: "Meat sau",
    image: MeatSau,
  },
  {
    id: 4,
    name: "Big beef",
    image: MeatSau,
  },
];

const ProductPage = ({ navigation, route }) => {
  const { params } = route || {};

  const [activeTopping, setActiveTopping] = React.useState(listTopping[0]);

  // console.log("params", params);
  return (
    <View style={style.productDetailWrapper}>
      <ScrollView>
        <View style={style.productDetailWrapperBoxImage}>
          <View style={style.productDetailWrapperDetailImage}>
            <Image
              source={params.img}
              style={style.productDetailWrapperImage}
            />
          </View>
        </View>
        <View style={style.productDetailWrapperBoxNumber}>
          <ImageBackground
            source={BtnNumber}
            style={style.productDetailWrapperBoxNumberDetail}
          >
            <TouchableOpacity>
              <Text style={style.productDetailWrapperBoxNumberText}>-</Text>
            </TouchableOpacity>
            <Text style={style.productDetailWrapperBoxNumberText}>2</Text>
            <TouchableOpacity>
              <Text style={style.productDetailWrapperBoxNumberText}>+</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={style.productDetailWrapperBoxTitle}>
          <Text style={style.productDetailWrapperBoxTitleText}>
            {params.title}
          </Text>
          <View style={style.productDetailWrapperBoxTitleUnde}>
            <View style={style.productDetailWrapperBoxTitleUndeIcon}>
              <Image source={IconStart} />
              <Text style={style.productDetailWrapperBoxTitleUndeIconText}>
                +4
              </Text>
            </View>
            <View style={style.productDetailWrapperBoxTitleUndeIcon}>
              <Image source={IconFire} />
              <Text style={style.productDetailWrapperBoxTitleUndeIconText}>
                300cal
              </Text>
            </View>
            <View style={style.productDetailWrapperBoxTitleUndeIcon}>
              <Image source={IconClock} />
              <Text style={style.productDetailWrapperBoxTitleUndeIconText}>
                5-10min
              </Text>
            </View>
          </View>
        </View>
        <View style={style.productDetailWrapperBoxDes}>
          <Text style={style.productDetailWrapperBoxDesText}>
            Our simple, classic cheeseburger begins with a 100% pure beef burger
            seasoned with just a pinch of salt and pepper. The McDonald’s
            Cheeseburger is topped
          </Text>
        </View>
        <View style={style.productDetailWrapperBoxTopping}>
          <Text style={style.productDetailWrapperBoxToppingText}>
            Toppings for you
          </Text>
          <ScrollView
            contentContainerStyle={style.productDetailWrapperBoxToppingList}
            horizontal={true}
          >
            {listTopping.map((item, index) => {
              return (
                <React.Fragment key={`${item.id}-${index}`}>
                  <ToppingItem
                    item={item}
                    activeTopping={activeTopping}
                    setActiveTopping={setActiveTopping}
                  />
                </React.Fragment>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
      <TouchableOpacity style={style.productDetailWrapperBoxAdd}>
        <Text style={style.productDetailWrapperBoxAddText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductPage;
