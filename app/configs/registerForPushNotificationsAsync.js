import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import userService from '../services/user'

export default async function registerForPushNotificationsAsync() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // Stop here if the user did not grant permissions
    if (status == 'granted') {
        // Get the token that identifies this device
        let token = await Notifications.getExpoPushTokenAsync()
        return userService.postNotificationToken(token)
    }
}