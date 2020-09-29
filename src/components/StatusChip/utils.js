import * as colors from "../../colors"

export function decideChipStatus(status, err) {
    switch (status) {
        case "in-progress":
            return {
                border: `1px solid ${colors.yellow.base}`,
                backgroundColor: colors.yellow.lightest,
                text: "in progress"
            }
        case "not-started":
            return {
                border: `1px solid ${colors.gray.dark}`,
                backgroundColor: colors.gray.light,
                text: "not started"
            }
        case "completed":
            return {
                border: `1px solid ${colors.green.base}`,
                backgroundColor: colors.green.lightest,
                text: "completed"
            }
        case "up-next":
            return {
                border: `1px solid ${colors.pink.base}`,
                backgroundColor: colors.pink.lightest,
                text: "up next"
            }
        case "err":
            return {
                border: `1px solid ${colors.pink.base}`,
                backgroundColor: colors.pink.lightest,
                text: err
            }
        default:
            return {
                border: `1px solid ${colors.gray.dark}`,
                backgroundColor: colors.gray.light,
                text: "default"
            }
    }
}
