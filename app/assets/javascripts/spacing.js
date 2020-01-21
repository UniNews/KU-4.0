import { Dimensions } from 'react-native';

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}