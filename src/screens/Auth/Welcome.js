import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../utils/colors";

function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
});
export default Welcome;
