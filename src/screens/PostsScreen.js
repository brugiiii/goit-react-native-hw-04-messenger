import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Публікації</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
