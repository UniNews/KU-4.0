import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import notificationService from '../services/notifications'

const registerForPushNotificationsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // Stop here if the user did not grant permissions
    if (status == 'granted') {
        // Get the token that identifies this device
        let token = await Notifications.getExpoPushTokenAsync()
        return notificationService.postNotificationToken(token)
    }
}

const unregisterForPushNotificationsAsync = async () => {
    // Get the token that identifies this device
    let token = await Notifications.getExpoPushTokenAsync()
    return notificationService.deleteNotificationToken(token)
}

export default {
    registerForPushNotificationsAsync,
    unregisterForPushNotificationsAsync
}
