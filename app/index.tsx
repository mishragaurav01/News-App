import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { router } from "expo-router";

export default function GetStartedScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/bgImage.png")} // Use your actual image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>The Bulletin</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Stay informed with trusted{"\n"}news, tailored for you.
        </Text>

        {/* Bullet points */}
        <View style={styles.bullets}>
          <Text style={styles.bullet}>• <Text style={styles.bulletText}>Breaking news alerts that matter to you</Text></Text>
          <Text style={styles.bullet}>• <Text style={styles.bulletText}>Unbiased reporting from verified sources</Text></Text>
          <Text style={styles.bullet}>• <Text style={styles.bulletText}>Personalized feed that learns your interests</Text></Text>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.buttonText}>
            Get <Text style={{ color: "#F4CE14" }}>Started</Text> !
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 45,
    fontWeight: "800",
    color: "black",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    marginBottom: 30,
    lineHeight: 30,
  },
  bullets: {
    marginBottom: 50,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "800"
  },
  bulletText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 40,
    marginTop: "auto",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
