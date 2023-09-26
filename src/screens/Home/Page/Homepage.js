import { style } from "../style";

import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";

// @image and icon
import { IconHamburgerMenu, IconArrowDown } from "../assets/svg";
import Pizza from "../assets/image/foodImage/Pizza.png";
import Burger from "../assets/image/foodImage/Burger.png";
import Sausage from "../assets/image/foodImage/Sausage.png";
import Samosa from "../assets/image/foodImage/Samosa.png";

// @components
import TypeItem from "../Components/TypeItem";

const Homepage = ({ navigation }) => {
  const [activeType, setActiveType] = useState(0);

  const listType = [
    {
      id: 1,
      name: "Pizza",
      image: Pizza,
      color: "#F0CAC1",
      cover: "#F0CCC1",
    },
    {
      id: 2,
      name: "Burger",
      image: Burger,
      color: "#3EC032",
      cover: "#A9E88B",
    },
    {
      id: 3,
      name: "Sausage",
      image: Sausage,
      color: "#C1DAF0",
      cover: "#C1DAF0",
    },
    {
      id: 4,
      name: "Samosa",
      image: Samosa,
      color: "#F0E3C1",
      cover: "#F0E3C1",
    },
  ];

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
      <View style={style.homeWrapperBody}>
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
                <TypeItem
                  id={index}
                  name={item.name}
                  image={item.image}
                  color={item.color}
                  cover={item.cover}
                  activeType={activeType}
                  handleActiveType={setActiveType}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Homepage;
