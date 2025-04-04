import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../../context/ThemeProvider";
import { COLORS } from "../../constants";


const SettingsMenu = () => {
  const router = useRouter();
  const { theme } = useTheme(); // 👈 Theme hook
  const isDarkMode = theme === "dark"; // 👈 Check dark mode


  return (
  
  
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
      }}
    >
       
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          marginLeft: 20,
          color: isDarkMode ? COLORS.darkText : COLORS.lightText,
        }}
      >
        ⚙️ Settings Menu
      </Text>
      <TouchableOpacity onPress={() => router.push("/settings/ThemeChange")}>
        <Text
          style={{
            fontSize: 18,
            color: isDarkMode ? COLORS.darkText : COLORS.lightText,
            marginBottom: 12,
          }}
        >
          🎨 Change Theme
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/settings/DailyReminders")}>
        <Text
          style={{
            fontSize: 18,
            color: isDarkMode ? COLORS.darkText : COLORS.lightText,
          }}
        >
          ⏰ Daily Reminders
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/login")}
        style={{
          marginTop: 40,
          backgroundColor: "#FE7654",
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          🚪 Log Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsMenu;
