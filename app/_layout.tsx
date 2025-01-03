import { Stack } from "expo-router";


const RooLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Correct syntax to hide headers
      }}
    >
      <Stack.Screen name="Home" />
      <Stack.Screen name="ScanQR" />
    </Stack>
  );
};

export default RooLayout;
