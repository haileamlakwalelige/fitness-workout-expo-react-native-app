import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { Image } from "expo-image";

export default function Regsiter() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    // Here you would typically handle the login logic, such as calling an API
    console.log("email address:", email);
    console.log("password:", password);
    // After successful login, you can navigate to another screen
    router.replace("/"); // Redirect to home screen after login
  };

  return (
    <SafeAreaView>
      <View className="bg-white min-h-screen justify-start p-5 overflow-y-auto">
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

        <Text className="text-black font-bold text-center w-full py-10 text-3xl">
          Sign Up
        </Text>
        <Text className="text-gray-700 pb-2 px-1">Full Name</Text>
        <TextInput
          className="bg-gray-100 py-5 placeholder:px-4 rounded-xl w-full"
          placeholder="Enter your full name"
          textContentType="name"
          autoCapitalize="none"
          keyboardType="default"
          value={name}
          onChangeText={setName}
        />
        <Text className="text-gray-700 pb-2 px-1 mt-2">Email Address</Text>
        <TextInput
          className="bg-gray-100 py-5 placeholder:px-4 rounded-xl w-full my-3"
          placeholder="Enter password"
          secureTextEntry={false}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
       
        <Text className="text-gray-700 pb-2 px-1 mt-2">Passwod</Text>
        <TextInput
          className="bg-gray-100 py-5 placeholder:px-4 rounded-xl w-full my-3"
          placeholder="Enter password"
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
    
        <TouchableOpacity
          className="bg-[#7C4DFF] py-5 rounded-xl w-full mt-6"
          onPress={handleLogin}
        >
          <Text className="text-white text-center font-bold">Continue</Text>
        </TouchableOpacity>

        <View className="flex-col justify-start items-start mt-6">
          <View className="flex-row justify-center items-center w-full mt-6">
            <Text className="text-gray-700">Already have an account?</Text>
            <Link href="/auth/login" asChild>
              <Text className="text-black ml-1 font-bold">Signin</Text>
            </Link>
          </View>
          <View className="flex-row justify-center items-center mt-6 gap-4">
            <View className="w-full h-[1px] text-gray-600 bg-gray-400"></View>
            <Text>Or</Text>
            <View className="w-full h-[1px] text-gray-600 bg-gray-400"></View>
          </View>
        </View>
        <View className="flex justify-center items-center mt-6 flex-row gap-5">
          <TouchableOpacity className="bg-[#E8E8E8] p-3 rounded-full w-fit mt-3">
            <Image
              source={{
                uri: "https://imgs.search.brave.com/P7lnlQ4Ew75qu0C262BWJW7kKVuWwB1zoLVs6SSuvK4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yNzAyLzI3MDI2/MDIucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
              }}
              style={{ width: 32, height: 32 }} // 👈 required
              accessibilityLabel="Back icon"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#E8E8E8] p-3 rounded-full w-fut mt-3">
            <Image
              source={{
                uri: "https://imgs.search.brave.com/3WUvevKFMp6S_6dAfUMolbHkpsL6pidKcgonFQYxFPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNTQ2NS8xNTQ2/NTU5OS5wbmc_c2Vt/dD1haXNfaHlicmlk",
              }}
              style={{ width: 32, height: 32 }} // 👈 required
              accessibilityLabel="Back icon"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#E8E8E8] p-3 rounded-full w-fit mt-3">
            <Image
              source={{
                uri: "https://imgs.search.brave.com/M3Xs1n3kv_M9_Jlu0l9-E8j6AhhoKj9HP5FpESAer0A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNjgvMTY4NzU0/LnBuZz9zZW10PWFp/c19oeWJyaWQ",
              }}
              style={{ width: 32, height: 32 }} // 👈 required
              accessibilityLabel="Back icon"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
