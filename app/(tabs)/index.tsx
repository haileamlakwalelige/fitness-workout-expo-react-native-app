import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Link href="/auth/login" asChild>
          <Text className="bg-blue-500 p-4 rounded-lg m-4 text-white text-center">
            Go to Login
          </Text>
        </Link>
      </View>
      <View className="flex-1 items-start justify-center bg-black px-5">
        <Text className="font-bold text-start text-white text-4xl">
          Building Digital{'\n'}Solutions That Drive{'\n'}Impact
        </Text>
        <Text className="text-[14px] font-light text-white">
          Haileamlak Waleligne is a Software Engineer, Tech Entrepreneur, and CEO
          passionate about building scalable systems, AI-powered tools, and modern web
          experiences.
        </Text>
      </View>
    </SafeAreaView>
  );
}
