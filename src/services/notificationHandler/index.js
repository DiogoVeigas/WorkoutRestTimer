import * as Notifications from "expo-notifications";

export async function notificationHandler(seconds) {
    try {
        const { status } = await Notifications.getPermissionsAsync();
        if (status !== 'granted') {
            console.log("Permission not granted")
        }
        await Notifications.dismissAllNotificationsAsync();
        await Notifications.cancelAllScheduledNotificationsAsync();
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Already?",
                body: 'Your rest seems to have finished.',
                priority: 'high',
            },
            trigger: { seconds: seconds + 1 },
        });
        
    } catch (error) {
        console.error(error);
    }
}