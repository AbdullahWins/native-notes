import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary">
      <Text className="text-secondary">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
