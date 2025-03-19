import { Platform } from "react-native"

export const HeaderHeight = Platform.OS == 'android' ? 55 : 60;

const tiny = Platform.OS == 'android' ? 5 : 5 // 5
const extraSmall = tiny * 1.5 // 10
const small = tiny * 2.5 // 12.5
const regular = tiny * 3 // 15
const medium = regular * 1.5 // 22.5
const large = regular * 2 // 30
const extraLarge = regular * 3 // 30

export const MetricsSizes = {
    tiny,
    extraSmall,
    small,
    regular,
    medium,
    large,
    extraLarge,
}

export const FontSize = {
    extraTiny: 12,
    tiny: 14,
    small: 16,
    regular: 20,
    medium: 30,
    large: 40,
}