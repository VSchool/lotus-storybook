import * as colors from "../../colors"

export function setStatus(status, message) {
    switch (status) {
        case "neutral":
            return {
                indicatorText: ":)",
                indicatorColor: colors.blue.base,
                indicatorBorder: `1px solid ${colors.blue.base}`,
                contentBackground: colors.blue.lightest,
                contentBorder: `2px solid ${colors.blue.light}`,
                messageContent: message
            }
        case "success":
            return {
                indicatorText: ":)",
                indicatorColor: colors.green.base,
                indicatorBorder: `1px solid ${colors.green.base}`,
                contentBackground: colors.green.lightest,
                contentBorder: `2px solid ${colors.green.light}`,
                messageContent: message
            }
        case "warning":
            return {
                indicatorText: "!",
                indicatorColor: colors.yellow.base,
                indicatorBorder: `1px solid ${colors.yellow.base}`,
                contentBackground: colors.yellow.lightest,
                contentBorder: `2px solid ${colors.yellow.light}`,
                messageContent: message
            }
        case "fail":
            return {
                indicatorText: "!",
                indicatorColor: colors.pink.base,
                indicatorBorder: `1px solid ${colors.pink.base}`,
                contentBackground: colors.pink.lightest,
                contentBorder: `2px solid ${colors.pink.light}`,
                messageContent: message
            }
        default:
            return {
                indicatorColor: "purple",
                indicatorBorder: `1px solid ${colors.blue.darker}`,
                contentBackground: colors.blue.lightest,
                contentBorder: `2px solid ${colors.blue.light}`,
                messageContent: message
            }
    }
}
