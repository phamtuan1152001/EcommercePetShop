import { style } from "../style";

import React from "react";
import { Text, View } from "react-native";

// @configs
import { listNav } from "../../../configs";

const BoxNavigation = () => {
  return (
    <View style={style.boxNavigationWrapper}>
      {listNav.map((item, index) => {
        return (
          <View
            key={`${item.id}-${index}`}
            style={style.boxNavigationWrapperView}
          >
            <View style={style.boxNavigationWrapperViewImage}>{item.icon}</View>
            <Text style={style.boxNavigationWrapperViewText}>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default BoxNavigation;
