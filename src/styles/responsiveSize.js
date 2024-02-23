import { useWindowDimensions } from "react-native";

export default function reponsiveSize(size) {
    const { width, height } = useWindowDimensions();

    const scaleFactor = 0.007;

    return Math.min(width, height) * scaleFactor + size;
}