import { Stack } from "expo-router"

const RooLayout = () => {
    return (<Stack>
        <Stack.Screen name="Home" />
        <Stack.Screen name="ScanQR" />
        <Stack.Screen />

    </Stack>)
}