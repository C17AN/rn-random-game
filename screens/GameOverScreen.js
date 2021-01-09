import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = ({ guessRound, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>게임 종료!</Text>
      <Text>라운드 수 : {guessRound}</Text>
      <Text>정답은 : {userNumber} 였습니다!</Text>
      <Button title="새 게임 시작하기" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
