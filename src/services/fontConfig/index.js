import { useFonts } from 'expo-font';

export default function LoadFonts() {
    const [fontsLoaded] = useFonts({
        'Mulish-Medium': require('../../assets/fonts/Mulish-Medium.ttf'),
        'Mulish-Regular': require('../../assets/fonts/Mulish-Regular.ttf'),
    });

    return fontsLoaded;
}