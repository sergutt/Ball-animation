import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";

export default class Bounce extends Component {
  state = {
    animation: new Animated.Value(150),
  };

  handlePress = () => {
    Animated.spring(this.state.animation, {
      toValue: 450,
      duration: 2000,
      friction: 1,
      tension: 20,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const trans = {
      transform: [{ translateY: this.state.animation }],
    };

    return (
      <>
        <Animated.View style={[styles.ball, trans]}></Animated.View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.handlePress}
            style={styles.button}
          ></TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "tomato",
    position: "absolute",
    left: 160,
    //top:150,
  },
  button: {
    width: 150,
    height: 70,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "blue",
    marginVertical: 50,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
