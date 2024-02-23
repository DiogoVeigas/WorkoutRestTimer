export default function getColorsByScheme(colorScheme) {
    let colors;
    if (colorScheme === 'dark') {
        colors = {
            text: "#ededed",
            background: "#111",
            highlight: "#f7f7f7",
        }
    } else {
        colors = {
            text: "#111",
            background: "#ededed",
            highlight: "#050505",
        }
    }
    colors.error = "#f73022";
    colors.success = "#26CC36";
    colors.shadow = "#000"; 

    return colors;
}
