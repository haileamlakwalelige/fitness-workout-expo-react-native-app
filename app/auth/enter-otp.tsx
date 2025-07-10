import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function EnterOtp() {
  return (
    <SafeAreaView>
      <View className="bg-white min-h-screen justify-start p-5 overflow-y-auto">
        {/* <View>
          <Text>9:41</Text>
        </View> */}
        <Link href="/" asChild>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://imgs.search.brave.com/hOXpZwpxg0lEwtRwfc-7dqZs_8ay28mQvrJYFdd5wXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni85OTY3Lzk5Njc2/ODgucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
              }}
              style={{ width: 32, height: 32 }} // 👈 required
              accessibilityLabel="Back icon"
            />
          </TouchableOpacity>
        </Link>
        <View className="pt-20">
          <Text className="text-black font-bold text-center w-full  pb-10 text-3xl">
            Enter OTP
          </Text>
          <Text className="text-[#9C9BC2] text-base text-center">
            We&apos;ve sent an OTP code to your email,{" "}
          </Text>
          <Text className="text-center text-black text-base">
            User53684@gmail.com
          </Text>
        </View>
        <View className="flex gap-4 flex-row py-10 w-full">
          <TextInput
            className="bg-gray-100 py-5 w-[60px] text-center rounded-2xl text-[#7C4DFF] text-2xl font-extrabold"
            placeholder="0"
            textContentType="name"
            autoCapitalize="none"
            keyboardType="default"
            // value={name}
            // onChangeText={setName}
          />
          <TextInput
            className="bg-gray-100 py-5 w-[60px] text-center rounded-2xl text-[#7C4DFF] text-2xl font-extrabold"
            placeholder="0"
            textContentType="name"
            autoCapitalize="none"
            keyboardType="default"
            // value={name}
            // onChangeText={setName}
          />
          <TextInput
            className="bg-gray-100 py-5 w-[60px] text-center rounded-2xl text-[#7C4DFF] text-2xl font-extrabold"
            placeholder="0"
            textContentType="name"
            autoCapitalize="none"
            keyboardType="default"
            // value={name}
            // onChangeText={setName}
          />
          <TextInput
            className="bg-gray-100 py-5 w-[60px] text-center rounded-2xl text-[#7C4DFF] text-2xl font-extrabold"
            placeholder="0"
            textContentType="name"
            autoCapitalize="none"
            keyboardType="default"
            // value={name}
            // onChangeText={setName}
          />
        </View>
        <View className="flex-row justify-center items-center w-full">
          <View className="flex-row justify-center items-center gap-1">
            <Text className="text-[#9C9BC2] text-sm">
              We will resend the code in
            </Text>
            <Text className="text-[#7C4DFF] text-base font-bold">59</Text>
            <Text className="text-[#7C4DFF] text-sm">s</Text>
          </View>
        </View>

        <TouchableOpacity
          className="bg-[#7C4DFF] py-5 rounded-xl w-full mt-6"
          //   onPress={handleLogin}
        >
          <Text className="text-white text-center font-bold">Verify</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center items-center w-full mt-6">
          <Text className="text-gray-700">Already have an account?</Text>
          <Link href="/auth/login" asChild>
            <Text className="text-black ml-1 font-bold">Signin</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
