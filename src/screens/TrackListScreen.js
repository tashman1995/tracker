import React, { PureComponent } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go To Track Detail"
        onPress={() => navigation.navigate("Signup")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
