import { ExpoLinksView } from "@expo/samples";
import React from "react";
import { ScrollView } from "react-native";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const tabBarIcon = ({ focused }: any) => (
  <TabBarIcon
    focused={focused}
    name={
      Platform.OS === "ios"
        ? `ios-information-circle${focused ? "" : "-outline"}`
        : "md-information-circle"
    }
  />
);
